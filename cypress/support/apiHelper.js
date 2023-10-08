export class ApiHelper{

    static getToken() {
        return  cy.request("POST", "/api/auth/login", {
            email: "test1@gmail.com",
            password: "12345Qq"
        }).then(res => {
            return res.body.token;
            
        });
    }

    static getCategories () {
        const token = window.localStorage.getItem("auth-token");
            return cy.request({
                method: "GET",
                url: "http://5.189.186.217/api/category",
                headers: {
                    "Authorization": token
                }
            }).its("body").then(body => {
                return body;
            })
    }
}

   
            
    