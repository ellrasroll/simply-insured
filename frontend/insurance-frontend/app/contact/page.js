'use client';

import Layout from "@/components/layout/Layout"; // Importing the Layout component
import Quote from "@/components/sections/home1/Quote"; // Importing your Quote component

export default function ContactPage() {
    return (
        <Layout headerStyle={1} footerStyle={1}> 
            <Quote />
        </Layout>
    );
}
