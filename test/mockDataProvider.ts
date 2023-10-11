import testQuests from "./testQuests";
import QuestProps from "../src/app/components/QuestProps"

let questProps: Array<QuestProps> = []

function importData () {
    testQuests.map(quest => {
       const q: QuestProps = {...quest}
       questProps.push(q) 
    })
    return questProps
}

export default {importData}