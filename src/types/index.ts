export interface Book {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
    image:string,
    title?:string,
}


// {
//     id: 9,
//     name: 'Glenna Reichert',
//     username: 'Delphine',
//     email: 'Chaim_McDermott@dana.io',
//     address: {
//       street: 'Dayna Park',
//       suite: 'Suite 449',
//       city: 'Bartholomebury',
//       zipcode: '76495-3109',
//       geo: [Object]
//     },
//     phone: '(775)976-6794 x41206',
//     website: 'conrad.com',
//     company: {
//       name: 'Yost and Sons',
//       catchPhrase: 'Switchable contextually-based project',
//       bs: 'aggregate real-time technologies'
//     }
//   },