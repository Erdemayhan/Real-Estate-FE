export default function Section({ title, children, ...props }){
    return (
        <section {...props}>
            {/*ensures all extra props that might be set in the custom section component here will be forwarded to built in section component*/}
            <h2>{title}</h2>
            {children}
        </section>
    )
}