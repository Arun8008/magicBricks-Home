import React from 'react'
import './Product.scss'

export const Product = () => {
 
   
    const Card=[
        {
            image:"https://cdn.staticmb.com/property/microsite/mb-banners/00668658/feature-project/img.jpg",
            title:"Bhaggyam Athulya",
            name:"Bhaggyam Constructions Pvt Ltd.",
            area:"Sholinganallur",
            space:"3 BHK Flats",
            amount:"₹ 1.07 Cr onwards",
            limit:"Marketed by Bhaggyam Constructions Pvt",
        },
        {
            image:"https://cdn.staticmb.com/property/microsite/mb-banners/00776087/featureproject-img.jpg",
            title:"Pearl Queens Park",
            name:"Pearl Constructions",
            area:"Medavakkam",
            space:"2, 3 BHK Flats",
            amount:"₹ 43.6 Lac onwards",
            limit:"Marketed by Pearl Constructions",
        },
        {
            image:"https://cdn.staticmb.com/property/microsite/mb-banners/00738636/featureproject-img.jpg",
            title:"Nest Craft",
            name:"Nest Builders",
            area:"Sithalapakkam",
            space:"2,3 BHK Flat",
            amount:"₹ 57.4 Lac onwards",
            limit:"Marketed by Nest Builders",
        },
        {
            image:"https://cdn.staticmb.com/property/microsite/mb-banners/00813495/featureproject-img.jpg",
            title:"Tulive Azpire",
            name:"Tulive GK Shetty",
            area:"Mudichur",
            space:"2, 3 BHK Flats",
            amount:"₹ 48.9 Laconwards",
            limit:"Marketed by Tulive GK Shetty",
        },
        {
            image:"https://cdn.staticmb.com/property/microsite/mb-banners/00820966/featureproject-img.jpg",
            title:"S.I.S Capetown",
            name:"South India Shelters Pvt Ltd",
            area:"Surapet",
            space:"Residential Plots",
            amount:"₹ 38.8 Lac Onwards",
            limit:"Marketed by South India Shelters Pvt Ltd",
        },
        {
            image:"https://cdn.staticmb.com/property/microsite/mb-banners/00816805/featureproject-img.jpg",
            title:"Vtech Arputha",
            name:"VTECH BUILDER",
            area:"Sithalapakkam",
            space:"2,3 BHK Flats",
             amount:"₹ 50.7 Lac onwards",
            limit:"Marketed by Vtech Builder",
        },
    ]
  return (
    <div className='card-section'>
       <div className='container'>
         <h2 className='heading'>New Project Gallery</h2>
           <div className='row'>
               {Card.map((value,index)=>{
                  return <div className='col-4' key={index}>
                    <div className='cardfull'> 
                       <div className='col-5'>
                           <div className='cardimg'>
                              <img src={value.image} />
                           </div>
                       </div>
                       <div className='col-7'>
                            <div className='cardcontent'>
                               <h2>{value.title}</h2>
                               <h4>{value.name}</h4>
                               <h5>{value.area}</h5>
                               <p className='space'>{value.space}</p>
                               <h3>{value.amount}</h3>
                               <p>{value.limit}</p>
                            </div>
                       </div>
                       </div>
                       </div>
               })}
           </div>
       </div>
    </div>
  
  )
}
