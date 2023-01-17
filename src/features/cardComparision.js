export function cardComparision(firstPick, secondPick){
    return firstPick.card.id === secondPick.card.id ? 
        (firstPick.setFlipped(true),
        secondPick.setFlipped(true),
        true):
        (firstPick.setFlipped(false),
        secondPick.setFlipped(false),
        false)
}