class History {
    private history
    private location

    constructor() {
        this.history = window.history
        this.location = window.location
    }

    // go(location: string): void {
    // }

    push(path: string): void {
        this.location.assign(path)
        // this.location.pathname = path
    }

    goBack(): void {
        if (this.history.length > 2)
            this.history.back()
        else
            this.location.pathname = '/'
    }

    getUrlPaths(): Array<string> {
        return this.location.pathname.split('/').filter(value => value !== '')
    }

}

export const history = new History()