import { v4 as uuidv4 } from 'uuid';
export const dishes = [
    {
        id: uuidv4(),
        item: "Choclate Bowl",
        img: "https://media.istockphoto.com/id/171588055/photo/chocolate-chips.jpg?s=612x612&w=0&k=20&c=myNW4MQDOY_9iC8AMPnuCwupvkcyXPKtqBYm8yVSs5s=",
        price: 299,
        type: "special",
        isVeg: true,
        containsEgg: false,
    },
    {
        id: uuidv4(),
        item: "Grilled Fish Platter",
        img: "https://www.simplyrecipes.com/thmb/Ob53CmbWR8LR6mc3-hEvICIruCg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Grilled-Fish-Herbs-Chilies-LEAD-08-1d86fec390f3407da10ec6a3cdd3ffa9.jpg",
        price: 499,
        type: "special",
        isVeg: false,
        containsEgg: false,
    },
    {
        id: uuidv4(),
        item: "Blueberry Cheesecake",
        img: "https://www.allrecipes.com/thmb/YgcuZwmbrQ1zLBgHMdYWlIalYGE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7934-Blueberry-Cheesecake-ddmfs-107-4x3-1-b923ba1512404beaa1766396d6ce07c6.jpg",
        price: 399,
        type: "special",
        isVeg: true,
        containsEgg: true,
    },
    {
        id: uuidv4(),
        item: "Schezwan wraps",
        img: "https://geekrobocook.com/wp-content/uploads/2021/04/110.-Schewan-Paneer-Rolls.jpg",
        price: 699,
        type: "main",
        isVeg: false,
        containsEgg: false,
    },
    {
        id: uuidv4(),
        item: "Vegetable Lasagna",
        img: "https://www.healthyseasonalrecipes.com/wp-content/uploads/2022/03/easy-vegetable-lasagna-primavera-sq-037.jpg",
        price: 549,
        type: "main",
        isVeg: true,
        containsEgg: false,
    },
    {
        id: uuidv4(),
        item: "Tiramisu",
        img: "https://www.recipetineats.com/wp-content/uploads/2016/03/Tiramisu_5.jpg?w=500&h=500&crop=1",
        price: 349,
        type: "dessert",
        isVeg: true,
        containsEgg: true,
    },
    {
        id: uuidv4(),
        item: "Kombucha",
        img: "https://mauitime.com/wp-content/uploads/2018/07/28483441237_bf18728f66_b.jpg",
        price: 349,
        type: "beverage",
        isVeg: true,
        containsEgg: true,
    },
    {
        id: uuidv4(),
        item: "Vietnamese Iced Coffee",
        img: "https://assets.bonappetit.com/photos/57af6d4f53e63daf11a4e57c/master/w_1280%2Cc_limit/vietnamese-iced-coffee-646.jpg",
        price: 349,
        type: "beverage",
        isVeg: true,
        containsEgg: true,
    },
    {
        id: uuidv4(),
        item: "Choco chips",
        img: "https://girirajbakers.com/wp-content/uploads/2021/12/Choco-Chip-Pastry-e1638882934994.jpg",
        price: 349,
        type: "special",
        isVeg: true,
        containsEgg: true,
    },
    {
        id: uuidv4(),
        item: "Caramel Cookie Chip",
        img: "https://i0.wp.com/lmld.org/wp-content/uploads/2020/04/Salted-Caramel-Pretzel-Chocolate-Chip-Cookies8.jpg",
        price: 349,
        type: "special",
        isVeg: true,
        containsEgg: true,
    },
    {
        id: uuidv4(),
        item: "Loco Coca (VEGAN)",
        img: "https://vegoutmag.com/wp-content/uploads/2022/03/Loco-Coco-2.jpg",
        price: 480,
        type: "dessert",
        isVeg: true,
        containsEgg: true,
    },
    {
        id: uuidv4(),
        item: "Blueberry Cheesecake",
        img: "https://www.allrecipes.com/thmb/YgcuZwmbrQ1zLBgHMdYWlIalYGE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7934-Blueberry-Cheesecake-ddmfs-107-4x3-1-b923ba1512404beaa1766396d6ce07c6.jpg",
        price: 399,
        type: "special",
        isVeg: true,
        containsEgg: true,
    },
]

export const acaibowls = [
    {
        id: uuidv4(),
        item: "OG Acai (VEGAN)",
        img: "https://themovementmenu.com/wp-content/uploads/2016/11/Paleo-and-Vegan-Acai-Bowl-500x500.jpg",
        price: 480,
        type: "main",
        isVeg: true,
        containsEgg: true,
    },
    {
        id: uuidv4(),
        item: "Aloha Acai",
        img: "",
        price: 480,
        type: "main",
        isVeg: true,
        containsEgg: true,
    },
    {
        id: uuidv4(),
        item: "Loco Coca (VEGAN)",
        img: "https://vegoutmag.com/wp-content/uploads/2022/03/Loco-Coco-2.jpg",
        price: 480,
        type: "main",
        isVeg: true,
        containsEgg: true,
    },
    {
        id: uuidv4(),
        item: "Treehugger Acai (VEGAN)",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/7Glz7XJv8im6_CWoceqiAA/1000s.jpg",
        price: 480,
        type: "main",
        isVeg: true,
        containsEgg: true,
    },
    {
        id: uuidv4(),
        item: "Nut-buster Acai (VEGAN)",
        img: "https://www.onelovelylife.com/wp-content/uploads/2020/07/Peanut-Butter-Acai-Bowls4B.jpg",
        price: 480,
        type: "main",
        isVeg: true,
        containsEgg: true,
    },
    {
        id: uuidv4(),
        item: "Spirulina Smoothie Bowl (VEGAN)",
        img: "",
        price: 480,
        type: "main",
        isVeg: true,
        containsEgg: true,
    }
]