
import MeQuest from "./components/MeQuest"
import TheeQuest from "./components/TheeQuest"
import QuestProps from "./components/QuestProps"

// test stuff
import mockDataProvider from "../../test/mockDataProvider"
import QuestCard from "./components/QuestCard"

let quests = mockDataProvider.importData()
let currentUser = "adam"

export default function Home() {
  return (
    <div id="mainContainer">
      <h1>SIDE QUESTS</h1>
      <h2>Quests for me</h2>
      <div>
        {quests
          .filter((quest) => (quest.adventurer === currentUser && !quest.completed))
          .map((quest) => { return <QuestCard {...quest}></QuestCard> })}
      </div>
      <h2>Quests for thee</h2>
      <ul>
        {quests
          .filter((quest) => (quest.questGiver === currentUser && !quest.completed))
          .map((quest) => { return <QuestCard {...quest}></QuestCard> })}
      </ul>
      <h2>My completed quests
        <div>
          {quests
            .filter((quest) => (quest.adventurer === currentUser && quest.completed))
            .map((quest) => { return <QuestCard {...quest}></QuestCard> })}
        </div>
      </h2>
      <h2>Thy completed quests
        {quests
          .filter((quest) => (quest.adventurer === currentUser && quest.completed))
          .map((quest) => { return <QuestCard {...quest}></QuestCard> })}
      </h2>
    </div>
  )
}
