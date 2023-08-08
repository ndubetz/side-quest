import QuestProps from "./QuestProps"

export default function TheeQuest(props: QuestProps) {
    return (
        <p>thus spake {props.questGiver} to {props.adventurer}: thou must {props.action}</p>
    )
}