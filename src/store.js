import { reactive } from "vue";

export const store = reactive({
    typologies: [],
    companies: [],
    shoppingCart: [],
    email: "",
    name: "",
    id:"",
    companyurl:"http://127.0.0.1:8000/admin/companies/"
})