
import MeQuest from "./components/MeQuest"
import TheeQuest from "./components/TheeQuest"
import QuestProps from "./components/QuestProps"

// test stuff
import mockDataProvider from "../../test/mockDataProvider"

let meQuest: QuestProps = 
  {
  adventurer: "adamska",
  questGiver: "adam",
  action: "give lighter to NATE",
  completed: true
  }

let meQuest2: QuestProps = 
  {
  adventurer: "adamska",
  questGiver: "nato",
  action: "give t-shirt to troy",
  completed: false
  }

let meQuests: Array<QuestProps> = [meQuest, meQuest2]

let quests = mockDataProvider.importData()

export default function Home() {
  return (
    <div>
        <h1>SIDE QUESTS</h1>
        <h2>Quests for me</h2>
          <div>
            {meQuests.filter((quest) => quest.completed === false).map((quest)=>{return <MeQuest {...quest}></MeQuest>})}
            </div>
        <h2>Quests for thee</h2>
          <ul>
            <TheeQuest adventurer="chance" questGiver="adam" action="bring me the mightiest pepper shaker this earth hath ever seen" completed={false}></TheeQuest>
          </ul>
        <h2>My completed quests
            <div>
            {meQuests.filter((quest) => quest.completed === true).map((quest)=>{return <MeQuest {...quest}></MeQuest>})}
            </div>
        </h2>
        <h2>Thy completed quests

        </h2>
    </div>
  )
}
