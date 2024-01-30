import CategoryItems from '@/components/CategoryItems'
import React from 'react'

export default function category({params: {category, subCategory}}: {params: {category:string, subCategory: string}}) {
  return (
    <div>
        {category}
        <CategoryItems categoryParam={category} subCategoryParam={subCategory}/>
    </div>
  )
}

