class History {
    private history
    private location

    constructor() {
        this.history = window.history
        this.location = window.location
    }

    go(location: string): void {
        console.log(location)
    }

    push(path: string): void {
        this.location.pathname = path
    }

    goBack(): void {
        if (this.history.length > 2)
            this.history.back()
        else
            this.location.pathname = '/'
    }

}

export const history = new History()