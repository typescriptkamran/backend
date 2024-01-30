import CategoryItems from '@/components/CategoryItems'
import React from 'react'

export default function subCategory({params: {category, subCategory}}: {params: {category:string, subCategory: string}}) {
  return (
    <div>
      {category}/{subCategory}

        <CategoryItems categoryParam={category} subCategoryParam={subCategory}/>
    </div>
  )
}

