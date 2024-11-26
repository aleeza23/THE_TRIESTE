
// BURGER IMAGES
import burger01 from '@/public/burger-01.webp'
import card03 from '@/public/people_s-comments.jpg'
// import burger02 from '@/public/burger-02.webp'
// import burger03 from '@/public/burger-03.webp'
// import burger04 from '@/public/burger-04.webp'
// import burger05 from '@/public/burger-05.webp'
// import burger06 from '@/public/burger-06.webp'
// import burger07 from '@/public/burger-07.webp'
// import burger08 from '@/public/burger-08.webp'

// SANDWICHES
// import sandwich01 from '@/public/sandwich-01.webp'


// PLATTER
// import platter01 from '@/public/platter-01.webp'
// import platter02 from '@/public/platter-02.webp'
// import platter03 from '@/public/platter-03.webp'
// import platter04 from '@/public/platter-04.webp'

// PASTA
// import pasta01 from '@/public/pasta-01.webp'
// import pasta02 from '@/public/pasta-02.webp'
// import pasta03 from '@/public/pasta-03.webp'
// import pasta04 from '@/public/pasta-04.webp'

// SOUPS
// import soup01 from '@/public/soup-01.webp'
// import soup02 from '@/public/soup-02.webp'
// import soup03 from '@/public/soup-03.webp'

// SALAD
// import salad01 from '@/public/salad-01.webp'
// import salad02 from '@/public/salad-02.webp'
// import salad03 from '@/public/salad-03.webp'
// import salad04 from '@/public/salad-04.webp'
// import salad05 from '@/public/salad-05.webp'



const MenuData = [

    {
        id: 'menu-item-2',
        imgSrc: card03,
        title: 'Burgers',
        link: '/menu/burgers',
        description: 'Juicy, flavorful burgers made with premium ingredients and cooked to perfection.',
        subMenuItems: [
            {
                id: 'sub-menu-item-2-1',
                imgSrc: burger01,
                title: 'Classic Strip Burger (Beef/Chicken)',
                price: '850',
            },
            // {
            //     id: 'sub-menu-item-2-2',
            //     imgSrc: burger02,
            //     title: 'Eastern Cheese Burger',
            //     price: '850',
            // },
            // {
            //     id: 'sub-menu-item-2-3',
            //     imgSrc: burger03,
            //     title: 'Stuffed Chicken Burger',
            //     price: '850',
            // },
            // {
            //     id: 'sub-menu-item-2-4',
            //     imgSrc: burger04,
            //     title: 'Fish Burger',
            //     price: '850',
            // },
            // {
            //     id: 'sub-menu-item-2-5',
            //     imgSrc: burger05,
            //     title: 'BBQ Chicken Burger',
            //     price: '750',
            // },
            // {
            //     id: 'sub-menu-item-2-6',
            //     imgSrc: burger06,
            //     title: 'Spicy Fillet Burger',
            //     price: '750',
            // },
            // {
            //     id: 'sub-menu-item-2-7',
            //     imgSrc: burger07,
            //     title: 'Cajun Burger',
            //     price: '750',
            // },
            // {
            //     id: 'sub-menu-item-2-8',
            //     imgSrc: burger08,
            //     title: 'Chicken Crunch Burger',
            //     price: '750',
            // },

        ],
    },
    // {
    //     id: 'menu-item-3',
    //     imgSrc: card01,
    //     title: 'Sandwiches',
    //     link: '/menu/sandwiches',
    //     description: 'Delicious sandwiches with fresh ingredients, perfect for a satisfying meal.',
    //     subMenuItems: [
    //         {
    //             id: 'sub-menu-item-3-1',
    //             imgSrc: sandwich01,
    //             title: 'Club Sandwich',
    //             price: '850',
    //         },

    //     ],
    // },
 

    // {
    //     id: 'menu-item-5',
    //     imgSrc: card03,
    //     title: 'Special Platters',
    //     link: '/menu/special-platters',
    //     description: 'A variety of our finest dishes combined into special platters for a complete meal.',
    //     subMenuItems: [
    //         {
    //             id: 'sub-menu-item-5-1',
    //             imgSrc: platter01,
    //             title: 'Platter 1 (Half Steak, Fried Prawn & Panni Pasta)',
    //             price: '1950',
    //         },
    //         {
    //             id: 'sub-menu-item-5-2',
    //             imgSrc: platter02,
    //             title: 'Platter 2 (Half Chicken, Fish Normande & Alfarado Pasta)',
    //             price: '1950',
    //         },
    //         {
    //             id: 'sub-menu-item-5-3',
    //             imgSrc: platter03,
    //             title: 'Platter 3 (Half Steak, Fried Fish & Stuffed Chicken)',
    //             price: '2050',
    //         },
    //         {
    //             id: 'sub-menu-item-5-4',
    //             imgSrc: platter04,
    //             title: 'Wings Platter',
    //             price: '1050',
    //         },

    //     ],
    // },

    // {
    //     id: 'menu-item-7',
    //     imgSrc: card02,
    //     title: 'Italian Pastas',
    //     link: '/menu/italian-pastas',
    //     description: 'Authentic Italian pastas with rich sauces, delivering a taste of Italy in every bite.',
    //     subMenuItems: [
    //         {
    //             id: 'sub-menu-item-7-1',
    //             imgSrc: pasta01,
    //             title: 'Mushroom Pasta',
    //             price: '1090',
    //         },
    //         {
    //             id: 'sub-menu-item-7-2',
    //             imgSrc: pasta02,
    //             title: 'Chicken Alfredo Pasta',
    //             price: '1190',
    //         },
    //         {
    //             id: 'sub-menu-item-7-3',
    //             imgSrc: pasta03,
    //             title: 'Penne Chicken Pasta',
    //             price: '1190',
    //         },
    //         {
    //             id: 'sub-menu-item-7-4',
    //             imgSrc: pasta04,
    //             title: 'Cajun Chicken Pasta',
    //             price: '1190',
    //         },
    //     ],
    // },

    // {
    //     id: 'menu-item-8',
    //     imgSrc: card03,
    //     title: 'Soups',
    //     link: '/menu/soups',
    //     description: 'Warm, comforting soups made with fresh ingredients to start your meal right.',
    //     subMenuItems: [
    //         {
    //             id: 'sub-menu-item-8-1',
    //             imgSrc: soup01,
    //             title: 'Chicken Corn Soup',
    //             price: '350',
    //         },
    //         {
    //             id: 'sub-menu-item-8-2',
    //             imgSrc: soup02,
    //             title: 'Hot & Sour Soup',
    //             price: '390',
    //         },
    //         {
    //             id: 'sub-menu-item-8-3',
    //             imgSrc: soup03,
    //             title: 'Seafood Chowdwe Soup',
    //             price: '450',
    //         },
    //     ],
    // },

    // {
    //     id: 'menu-item-9',
    //     imgSrc: card01,
    //     title: 'Salads',
    //     link: '/menu/salads',
    //     description: 'Fresh, healthy salads with a variety of ingredients, perfect for a nutritious meal.',
    //     subMenuItems: [
    //         {
    //             id: 'sub-menu-item-9-1',
    //             imgSrc: salad01,
    //             title: 'Chicken Caesar Salad',
    //             price: '650',
    //         },
    //         {
    //             id: 'sub-menu-item-9-2',
    //             imgSrc: salad02,
    //             title: 'Chicken Cheese & Apple Salad',
    //             price: '650',
    //         },
    //         {
    //             id: 'sub-menu-item-9-3',
    //             imgSrc: salad03,
    //             title: 'Italian Chicken Salad',
    //             price: '650',
    //         },
    //         {
    //             id: 'sub-menu-item-9-4',
    //             imgSrc: salad04,
    //             title: 'Italian Beef Salad',
    //             price: '750',
    //         },
    //         {
    //             id: 'sub-menu-item-9-5',
    //             imgSrc: salad05,
    //             title: 'Jacket Potato Salad',
    //             price: '730',
    //         },
    //     ],
    // }

];

export default MenuData;