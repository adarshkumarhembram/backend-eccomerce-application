class customError extends Eroor {
    constructor(messege, code){
        super(messege);
        this.code = code
    }
}

export default customError