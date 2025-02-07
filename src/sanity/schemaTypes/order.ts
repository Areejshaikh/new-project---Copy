export default{
    name: "order",
    title: "Order",
    type: "document",
    fields: [
     {
        name: "firstName",
        title: "First Name",
        type: "string",
      },
      {
        name: "lastName",
        title: "Last Name",
        type: "string",
      },
      {
        name: "address",
        title: "Address",
        type: "string",
      },
      {
        name: "city",
        title: "City",
        type: "string",
      },
      {
        name: "discount",
        title: "Discount",
        type: "string",
      },
    {
        name: "zipCode",
        title: "Zip Code",
        type: "string",
      },
      {
        name: "phone",
        title: "Phone",
        type: "number",
      },
      {
        name: "email",
        title: "Email",
        type: "string",
      },
      {
        name: "total",
        title: "Total",
        type: "number",
      },
     
     
      {
        name: 'cartItems',
        title: 'Cart Items',
        type: 'array',
        of: [
          { type: 'reference' ,to : {type: 'products'}}]
      },
      {
        name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Success', value: 'success' },
          { title: 'Disatch', value: 'dispatch' },
        ],
        layout: 'ratio'
      },
      initialValue: 'pending'
      },

    ],
  };
  