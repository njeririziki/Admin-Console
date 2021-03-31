 
 const employees=[
    {id:13456, name:'Wendy'},
    {id:2522, name:'Kelly'},
    {id:33454, name:'John'},
    {id:43452, name:'Chris'}, 
  ]
  const IssueCategories=[
  {id:1, name:'Bugs'},
  {id:2, name:'Billing issues'},
  {id:3, name:'Feature requests'},
  {id:4, name:'Network Issues'},
  ]
const susbcriptions=[
    {id:1, name:'Trial'},
    {id:2, name:'Basic'},
    {id:3, name:'Premium'},
    {id:4, name:'Early Adopter'}, 
]

const customers = 'customer_name, contact_person, phone_number, customer_group_id';
const vendors = 'vendor_name, contact_person, phone_number, email_address, notes';
const products= 'product_name, cost, price, product_group_id, tax_class_id, expense_group_id,uom_id, allow_sale, allow_purchase,product_nature, product_type, alert_quantity';


export {
    employees,
    IssueCategories,
    customers,
    vendors,
    products,
    susbcriptions
}