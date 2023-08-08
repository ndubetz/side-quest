import testQuests from "./testQuests";
import QuestProps from "../src/app/components/QuestProps"

let questProps: Array<QuestProps> = []

function importData () {
    return testQuests.map(quest => {
       const q: QuestProps = {...quest}
       console.log(q)
       questProps.push(q) 
    })
}

export default {importData}