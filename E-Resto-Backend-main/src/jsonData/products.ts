const products : object[]= [
    {
        "name": "Tortilla de papas",
        "description": "Tortilla de papas",
        "price": 1000,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664466426/E-Commerce%20Food/2018151-1618507927746_mrzdkk.webp",
        "category": "Papas"
    },
    {
        "name": "Papas fritas",
        "description": "Porcion de papas fritas para 2 personas",
        "price": 1000,
        "stock": 100,
        "rating": 4,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664466465/E-Commerce%20Food/2018149-1619199424915_y6p9vs.webp",
        "category": "Papas"
    },
    {
        "name": "Papas Cerveceras",
        "description": "Papas fritas con cheddar, panceta y verdeo",
        "price": 1300,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664466493/E-Commerce%20Food/2018148-1618508286190_dnebup.webp",
        "category": "Papas"
    },
    {
        "name": "Pepsi Regular 354 ml",
        "description": "Gaseosa",
        "price": 200,
        "stock": 100,
        "rating": 3,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664466519/E-Commerce%20Food/9698b85c-3e59-4524-a40a-ddd03d3c1e64-1628272541947_o1toei.webp",
        "category": "Bebidas sin Alcohol"
    },
    {
        "name": "7Up Lima Limón 354 ml",
        "description": "Gaseosa",
        "price": 200,
        "stock": 100,
        "rating": 4,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664466579/E-Commerce%20Food/e39991c4-3185-4d2b-a2ab-e1ec3661bbb5-1628272573706_onsu3m.webp",
        "category": "Bebidas sin Alcohol"
    },
    {
        "name": "Pepsi Black 354 ml",
        "description": "Gaseosa",
        "price": 200,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664466595/E-Commerce%20Food/b67b4f63-412c-4866-92a1-2fe4366764f3-1628272584783_mgqvbp.webp",
        "category": "Bebidas sin Alcohol"
    },
    {
        "name": "Villavicencio 500 ml",
        "description": "Agua",
        "price": 200,
        "stock": 100,
        "rating": 3,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664466618/E-Commerce%20Food/D_NQ_NP_777853-MLA44632277984_012021-O_fafvvu.webp",
        "category": "Bebidas sin Alcohol"
    },
    {
        "name": "Cerveza Heineken lata",
        "description": "Cerveza",
        "price": 450,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664466637/E-Commerce%20Food/D_NQ_NP_637542-MLA49976820839_052022-O_iqhkiu.webp",
        "category": "Cervezas"
    },
    {
        "name": "Schneider Lager 473 ml",
        "description": "Cerveza",
        "price": 350,
        "stock": 100,
        "rating": 4,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664466656/E-Commerce%20Food/1139196-1588023044528_szjlrb.webp",
        "category": "Cervezas"
    },
    {
        "name": "Stella Artois 473 ml",
        "description": "Cerveza",
        "price": 450,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664466672/E-Commerce%20Food/D_NQ_NP_759447-MLA43740133080_102020-O_i7c5kt.jpg",
        "category": "Cervezas"
    },
    {
        "name": "Andes Roja 473 ml",
        "description": "Cerveza",
        "price": 450,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664466692/E-Commerce%20Food/D_NQ_NP_736046-MLA48522001422_122021-O_kid9tu.webp",
        "category": "Cervezas"
    },
    {
        "name": "Imperial Ipa 43 ml",
        "description": "Cerveza",
        "price": 450,
        "stock": 100,
        "rating": 4,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664466713/E-Commerce%20Food/D_NQ_NP_855362-MLA46569073008_062021-O_ztz23q.webp",
        "category": "Cervezas"
    },
    {
        "name": "Ensalada Cesar",
        "description": "Pollo, lechuga, parmesano, croutones y salsa especial.",
        "price": 1100,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664466735/E-Commerce%20Food/2018269-1619199424925_pk4vwd.webp",
        "category": "Ensaladas"
    },
    {
        "name": "Ensalada Serrana",
        "description": "Rúcula, jamón crudo, tomate cherry y parmesano.",
        "price": 1100,
        "stock": 100,
        "rating": 3,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664466768/E-Commerce%20Food/2018268-1619199424922_metdbr.webp",
        "category": "Ensaladas"
    },
    {
        "name": "Ensalada Completa",
        "description": "Lechuga, tomate, cebolla, zanahoria, morrón, jamón y queso.",
        "price": 1100,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664466786/E-Commerce%20Food/2018270-1619199424926_bom87k.webp",
        "category": "Ensaladas"
    },
    {
        "name": "Cheese & Bacon",
        "description": "Cheddar/Bacon/Cebolla caramelizada/BBQ.",
        "price": 1050,
        "stock": 100,
        "rating": 4,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664466800/E-Commerce%20Food/1647603815618_fxodta.jpg",
        "category": "Hamburguesas"
    },
    {
        "name": "Cheese Burger",
        "description": "Cheddar/Mayonesa.",
        "price": 900,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664466819/E-Commerce%20Food/1647603829943_hmuuh7.jpg",
        "category": "Hamburguesas"
    },
    {
        "name": "Nairobi",
        "description": "100% carne de ternera 180 grs, tomate confitado, aceite de albahaca y queso tybo",
        "price": 1000,
        "stock": 100,
        "rating": 3,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664466837/E-Commerce%20Food/1647603620254_awjfar.jpg",
        "category": "Hamburguesas"
    },
    {
        "name": "Berlin",
        "description": "100% carne de ternera 180 grs, provoleta, rúcula, morrón asado, cebolla caramelizada y mayonesa de chimichurri",
        "price": 1050,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664466861/E-Commerce%20Food/1647603857338_uao7be.jpg",
        "category": "Hamburguesas"
    },
    {
        "name": "Oslo",
        "description": "100% pollo 180 grs, tomate confitado, rúcula, queso tybo, aros de cebolla rebozados, barbacoa",
        "price": 1050,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664466928/E-Commerce%20Food/1647603870000_gixptf.jpg",
        "category": "Hamburguesas"
    },
    {
        "name": "Tokio",
        "description": "100% carne de ternera 180 grs , queso cheddar, panceta, tomate confitado, cebolla caramelizada,",
        "price": 1150,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664466800/E-Commerce%20Food/1647603815618_fxodta.jpg",
        "category": "Hamburguesas"
    },
    {
        "name": "Churrinche",
        "description": "100% carne de ternera 180 grs, jamón cocido, muzzarella, tomate, salsa criolla",
        "price": 1150,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664466800/E-Commerce%20Food/1647603815618_fxodta.jpg",
        "category": "Hamburguesas"
    },
    {
        "name": "Veggie Burger",
        "description": "Falafel/Cheddar/Lechuga/Tomate/Mayonesa.",
        "price": 950,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664466837/E-Commerce%20Food/1647603620254_awjfar.jpg",
        "category": "Hamburguesas"
    },
    {
        "name": "Mila Napolitana",
        "description": "Milanesa con salsa de tomate, queso muzzarella y jamón",
        "price": 1500,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664467022/E-Commerce%20Food/1579602-1619199408414_uvc5st.webp",
        "category": "Milanesas"
    },
    {
        "name": "Mila Completa",
        "description": "Milanesa con huevos fritos",
        "price": 1350,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664467038/E-Commerce%20Food/1464154-1597089380193_jns9w5.webp",
        "category": "Milanesas"
    },
    {
        "name": "Mila BBQ",
        "description": "Milanesa con salsa barbacoa, panceta crocante y huevos fritos ",
        "price": 1550,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664467056/E-Commerce%20Food/1464164-1597089419402_niwv8w.webp",
        "category": "Milanesas"
    },
    {
        "name": "Mila Guacamole",
        "description": "Milanesa, queso crema, guacamole, salsa criolla y nachos",
        "price": 1600,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664467072/E-Commerce%20Food/2029677-1619199424928_ocnfeb.webp",
        "category": "Milanesas"
    },
    {
        "name": "Sorrentinos de Jamón & Queso",
        "description": "Sorrentinos de jamón y queso, con queso rallado y pan",
        "price": 1000,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664467090/E-Commerce%20Food/1464118-1597089007997_c3cgro.webp",
        "category": "Pastas"
    },
    {
        "name": "Ravioles de Pollo & Verdura",
        "description": "Ravioles de pollo, verdura, con queso rallado y pan.",
        "price": 1000,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664467106/E-Commerce%20Food/1464099-1597088997641_ddmbjk.webp",
        "category": "Pastas"
    },
    {
        "name": "Tagliatelle Al Huevo",
        "description": "Tagliatelle al huevo, con queso rallado y pan",
        "price": 1000,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664467122/E-Commerce%20Food/1464097-1597088965309_wl4nlw.webp",
        "category": "Pastas"
    },
    {
        "name": "Ñoquis",
        "description": "Ñoquis de papa, con queso rallado y pan",
        "price": 900,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664467138/E-Commerce%20Food/2286703-1622486406840_cpxzxe.webp",
        "category": "Pastas"
    },
    {
        "name": "Pizza Muzzarella",
        "description": "Pizza de salsa de tomate, muzzarella, aceitunas verdes, orégano",
        "price": 950,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664467153/E-Commerce%20Food/1464083-1597088848483_wxeuw1.webp",
        "category": "Pizzas"
    },
    {
        "name": "Pizza Napolitana",
        "description": "Pizza de salsa de tomate, muzzarella, rodajas de tomate natural, aceitunas verdes, orégano.",
        "price": 900,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664467337/E-Commerce%20Food/3d251d1dd1f9ddd2ac3b7d53b65c1b05_pizza_salami_website_1200_600_hnh7tk.jpg",
        "category": "Pizzas"
    },
    {
        "name": "Pizza de Verdura",
        "description": "Pizza de salsa de tomate, espinaca, salsa blanca, provolone rallado, aceitunas verdes, orégano.",
        "price": 700,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664467385/E-Commerce%20Food/pizza-de-brocoli-by-josquin2000_riiqm7.jpg",
        "category": "Pizzas"
    },
    {
        "name": "Pizza Fugazza",
        "description": "Pizza de muzzarella, cebolla, aceite de oliva, orégano.",
        "price": 1200,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664467415/E-Commerce%20Food/fugaz_9AZICtTMHNiBKq3vVgj6Qz4hD1F0c2_vsvosj.jpg",
        "category": "Pizzas"
    },
    {
        "name": "Pizza de Jamón",
        "description": "Pizza de salsa de tomate, jamón cocido, muzzarella, aceitunas verdes, orégano.",
        "price": 900,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664467447/E-Commerce%20Food/pizza-jamo_CC_81n-y-queso-Newlux_sxojor.jpg",
        "category": "Pizzas"
    },
    {
        "name": "Pizza Jamón & Morrones",
        "description": "Pizza de salsa de tomate, muzzarella, jamón, aceitunas verdes, orégano.",
        "price": 1100,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664467483/E-Commerce%20Food/cbae6c5d135e92cd19e8b496afe91118997b9ba887e8d141e42ea37af8ed94b783288_rxg7is.jpg",
        "category": "Pizzas"
    },
    {
        "name": "Pizza de Palmitos",
        "description": "Pizza de salsa de tomate, muzzarella, jamón, palmitos, salsa golf, aceitunas verdes, orégano.",
        "price": 1200,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664467514/E-Commerce%20Food/oadh4wne8ofcylhnooea.jpg",
        "category": "Pizzas"
    },
    {
        "name": "Pizza Calabresa",
        "description": "Salsa de tomate, muzzarella, longaniza, morrones, orégano y aceitunas.",
        "price": 1200,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664467543/E-Commerce%20Food/43-image_web_rqmahb.jpg",
        "category": "Pizzas"
    },
    {
        "name": "Torta Oreo",
        "description": "Postre de torta con crema Oreo, dulce de leche.",
        "price": 350,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664467567/E-Commerce%20Food/1494032-1597442233044_xtzmua.webp",
        "category": "Postres"
    },
    {
        "name": "Chocotorta",
        "description": "Torta con galletitas, dulce de leche, queso blanco.",
        "price": 350,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664467584/E-Commerce%20Food/1494031-1597442216533_vrrtit.webp",
        "category": "Postres"
    },
    {
        "name": "Mousse de Chocolate",
        "description": "Postre de mousse de chocolate",
        "price": 350,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664467602/E-Commerce%20Food/3195e228-08bf-4557-9d02-ab54634cafc2-1635380880184_x00jrn.webp",
        "category": "Postres"
    },
    {
        "name": "Cheesecake",
        "description": "Postre de queso con topping de frutos rojos.",
        "price": 350,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664467617/E-Commerce%20Food/8f7a357b-3bbf-42e8-8a26-927cabd53b41-1635380924274_jyv7vm.webp",
        "category": "Postres"
    },
    {
        "name": "Sándwich Mila Full Full",
        "description": "Sándwich de milanesa de ternera, lechuga, tomate, cebolla morada, jamón, queso, huevo a la plancha con papas fritas.",
        "price": 1150,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664467632/E-Commerce%20Food/1464147-1597089135792_qerab6.webp",
        "category": "Sandwiches"
    },
    {
        "name": "Sándwich Mila Cheddar",
        "description": "Sándwich de milanesa de ternera, queso cheddar, panceta grillada, cebolla caramelizada",
        "price": 1200,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664467646/E-Commerce%20Food/1976670-1619199408429_ehla3e.webp",
        "category": "Sandwiches"
    },
    {
        "name": "Sándwich Mila BBQ",
        "description": "Sándwich de milanesa de ternera, barbacoa, panceta grillada, huevo a la plancha",
        "price": 1200,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664467660/E-Commerce%20Food/1976669-1618507651643_jbymlg.webp",
        "category": "Sandwiches"
    },
    {
        "name": "Sándwich Lomito Full Ful",
        "description": "Sándwich de lomito, lechuga, tomate, cebolla morada, jamón, queso, huevo a la plancha",
        "price": 1400,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664467674/E-Commerce%20Food/1464149-1597089358916_kmlgul.webp",
        "category": "Sandwiches"
    },
    {
        "name": "Sandwich Lomito Clásico",
        "description": "Sándwich de lomito, tomate, lechuga",
        "price": 1200,
        "stock": 100,
        "rating": 5,
        "img": "https://res.cloudinary.com/luubermudezz/image/upload/v1664467688/E-Commerce%20Food/1976666-1619199408419_kp4kjb.webp",
        "category": "Sandwiches"
    }
]

export default products;