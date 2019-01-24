export default class Comment {
    constructor(
        public id: Number,
        public username: String,
        public body: String,
        public replies: Array<Comment>
    ) {}
}
