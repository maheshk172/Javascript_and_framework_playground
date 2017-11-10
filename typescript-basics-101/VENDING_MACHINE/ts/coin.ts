class Quarter {
    private value: number = 0.25;
    
    get Value() {
        return this.value;
    }

    /*set Value(newValue) {
        this.value = newValue;
    }*/


    //default is public
    getImageUrl(): string {

        return "/img/Quarter.jpg";
    }
}
