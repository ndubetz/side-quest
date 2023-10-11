import './page.css';
import mockDataProvider from "../../test/mockDataProvider"
import QuestCard from "./components/QuestCard"

let quests = mockDataProvider.importData()
let currentUser = "adam"

export default function Home() {
  return (
    <div id="mainContainer" className="mainDiv">
      <h1 className="headers">SIDE QUESTS</h1>

      <div className="questCardContainer">
        <h2 className="headers">Quests for me</h2>
        {quests
          .filter((quest) => (quest.adventurer === currentUser && !quest.completed))
          .map((quest) => { return <QuestCard {...quest}></QuestCard> })}
      </div>

      <div className="questCardContainer">
        <h2 className="headers">Quests for thee</h2>
        {quests
          .filter((quest) => (quest.adventurer !== currentUser && !quest.completed))
          .map((quest) => { return <QuestCard {...quest}></QuestCard> })}
      </div>

      <div className="questCardContainer">
        <h2 className="headers">My completed quests
        </h2>
        {quests
          .filter((quest) => (quest.adventurer === currentUser && quest.completed))
          .map((quest) => { return <QuestCard {...quest}></QuestCard> })}
      </div>

      <div className="questCardContainer">
        <h2 className="headers">Thy completed quests</h2>
        {quests
          .filter((quest) => (quest.adventurer !== currentUser && quest.completed))
          .map((quest) => { return <QuestCard {...quest}></QuestCard> })}
      </div>

    </div>
  )
}
