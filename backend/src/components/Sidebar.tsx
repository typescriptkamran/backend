"use client"
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {Category, categories, Subcategory} from "@/data/Categories";
import { subscribe } from "diagnostics_channel";

const Sidebar = () => {
  return (
    <div className="h-screen flex border-solid border-r-2 border-r-black p-3">
      <Accordion type="single" collapsible className="w-full">
        {categories.map(({ id, name, slug, subcategories }: Category, index) => {
          return (
            <AccordionItem key={id} value = {`item-${index}`}>
              <AccordionTrigger>{name}</AccordionTrigger>
                {/* {JSON.stringify(subcategories)} */}
                {subcategories.map(({name, id, slug: SubSlug}:Subcategory )=> {
                  return (<AccordionContent key={id}>
                    <Link href={`/shop/${slug}/${SubSlug}`}>
                    {name}
                    </Link>      
                    </AccordionContent>)
                })}
                
              
                
                
            </AccordionItem>
          );
        })}
        
      </Accordion>
    </div>
  );
};

export default Sidebar;
