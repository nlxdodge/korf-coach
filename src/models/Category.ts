export default class Category {
    id: string
    order: number
    name: string
    description: string
    icon: string
    color: string

    constructor(id: string, order: number, name: string, description: string, icon: string, color: string) {
        this.id = id
        this.order = order
        this.name = name
        this.description = description
        this.icon = icon
        this.color = color
    }
}
