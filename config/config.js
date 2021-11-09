export const PORT = 4000;
export const environment = {
    development: {
        serverURL: `http://localhost:${PORT}/`,
        dbString: 'mongodb+srv://root:1234@cluster0.cgc8z.mongodb.net/hapi?retryWrites=true&w=majority'
    },
    production: {
        serverURL: `http://localhost:${PORT}/`,
        dbString: 'mongodb+srv://root:1234@cluster0.cgc8z.mongodb.net/hapi?retryWrites=true&w=majority'
    }
}
