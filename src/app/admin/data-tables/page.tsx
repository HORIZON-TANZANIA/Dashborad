'use client';
import tableDataDevelopment from 'variables/data-tables/tableDataDevelopment';
import tableDataCheck from 'variables/data-tables/tableDataCheck';
import CheckTable from 'components/admin/data-tables/CheckTable';
import tableDataColumns from 'variables/data-tables/tableDataColumns';
import tableDataComplex from 'variables/data-tables/tableDataComplex';
import DevelopmentTable from 'components/admin/data-tables/DevelopmentTable';
import ColumnsTable from 'components/admin/data-tables/ColumnsTable';
import ComplexTable from 'components/admin/data-tables/ComplexTable';
import React from 'react';
import { useRouter } from 'next/router';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const Tables = () => {
  return (
<div className="flex flex-col md:flex-row">
  <div  className="w-1/2 border-r divide-y container mx-auto p-4  md:order-1">
     <h1 className="text-3xl font-bold">Rewards </h1>
     <div className="flex">
<div className='px-2 pt-4 pb-2 w-5/6 '>
  <h1 className="text-xl font-bold ">Add Reward</h1>
  <p>Product Image, Product Price</p>
</div>
<div className="px-2 pt-5 pb-2">
  <button className="text-xl font-bold"> &gt; </button>
</div>
</div>
 
<div className="flex">
  <div className='px-2 pt-4 pb-2 w-5/6'>
  <p className="text-xl font-bold">Available Rewards</p>
  <p>Product Price, Product Points, Edit Product</p>

</div>
<div className="'px-2 pt-5 pb-2'">
  <button className="text-xl font-bold"> &gt; </button>
</div>
</div>
 
<div className="flex">
  <div className='px-2 pt-4 pb-2 w-5/6'>
  <p className="text-xl font-bold">Redemption Frequency</p>
  <p>Product Redemption Frequency</p>

</div>
<div className="'px-2 pt-5 pb-2'">
  <button className="text-xl font-bold"> &gt; </button>
</div>
</div>
<div className="flex">
  <div className='px-2 pt-4 pb-2 w-5/6'>
  <p className="text-xl font-bold">Amount Tires</p>
  <p>Discount Amount Tier , Add Discount</p>

</div>
<div className="'px-2 pt-5 pb-2'">
  <button className="text-xl font-bold"> &gt; </button>
</div>
</div>
 
  <div className="border-b border-gray-400 p-4"/>

  </div>
    <div className="container mx-auto p-4 md:order-2">
      <h1 className="text-3xl font-bold">Add Reward</h1>

      <Formik
        initialValues={{
          productName: '',
          productImage: '',
          productPrice: 0,
          nameDisplayedOnReward: '',
          redemptionFrequency: '',
          discountAmountTier: 0,
          productCost: 0,
          pointRequired: 0,
        }}
        validationSchema={Yup.object({
          productName: Yup.string().required('Please enter a product name'),
          productImage: Yup.string().required('Please upload a product image'),
          productPrice: Yup.number().required('Please enter a product price'),
          nameDisplayedOnReward: Yup.string().required(
            'Please enter a name for the reward'
          ),
          redemptionFrequency: Yup.string().required(
            'Please select a redemption frequency'
          ),
          discountAmountTier: Yup.number().required(
            'Please enter a discount amount tier'
          ),
          productCost: Yup.number().required('Please enter a product cost'),
          pointRequired: Yup.number().required('Please enter a point requirement'),
        })}
        onSubmit={(values) => {
          
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col">
            <h3 className="text-xl font-bold">Product Name</h3>
            <Field
              name="productName"
              type="text"
              placeholder="Product Name"
              className="mb-4 p-2 border rounded-lg"
            />
            {errors.productName && touched.productName && (
              <div className="text-red-500">{errors.productName}</div>
            )}

<h3 className="text-xl font-bold">Product Description</h3>
            <Field
              name="Description"
              type="text"
              placeholder="Product Name"
              className="mb-6 p-5 border rounded-lg"
            />
            <h3 className="text-xl font-bold">Product Image</h3>
            <Field
              name="productImage"
              type="file"
              placeholder="Product Image"
              className="border-dashed border-2 border-gray-400 h-32 m-2 flex items-center justify-center p-2"  
            />

            {errors.productImage && touched.productImage && (
              <div className="text-red-500">{errors.productImage}</div>
            )}
            <h3 className="text-xl font-bold p-2">Product Cost</h3>
            <Field
              name="productPrice"
              type="number"
              placeholder="Product Price"
              className="mb-4 p-2 border rounded-lg"
            />
            {errors.productPrice && touched.productPrice && (
              <div className="text-red-500">{errors.productPrice}</div>
            )}
          
          <div className="flex">
          <h3 className="text-xl font-bold px-4 py-2">Points Required</h3>
            <Field
              name="pointrequired"
              type="number"
              className="mb-4 p-2 border rounded-lg"
            />
        </div>
           

            <button type="submit" className="bg-brand-500 text-white border w-1/3 font-bold p-3 rounded-lg">
              Add Reward 
            </button>
        
          </Form>

        )}
        
      </Formik>
      
    </div>
    </div>
  );
};

export default Tables;
