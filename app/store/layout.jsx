import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "DemoShop. - Store Dashboard",
    description: "DemoShop. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
