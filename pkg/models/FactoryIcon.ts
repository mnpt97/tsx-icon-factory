
export type IFactoryIcon = {
    name : string,
    assetPath : string,
    type ?: "svg" | "img",
    sprite ?: string
}

export type CreatedFactoryIcon = {
    jsx : Element
} & IFactoryIcon


