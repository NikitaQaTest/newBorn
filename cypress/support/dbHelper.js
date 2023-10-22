export class DbHelper {
    static getAllCategories() {
        return cy.findMany({}, {collection: "categories"});
    }

    static getCategoryByname(name) {
        return cy.findOne({name}, {collection: "categories"})
    }
}