import CategoryItems from '@/components/CategoryItems'
import SingleItem from '@/components/SingleItem'


export default function Slug({params: {category, subCategory, slug, item}}: {params: {category:string, subCategory:string, slug:string, item:string}}) {
    return (<div>
        
        {category}/{subCategory}/{slug}
        <div>
            <SingleItem category={category} subCategory={subCategory}  slug={slug}/>
        </div>

        

    </div>)
}