function AboutUsItem({title , desc , image_id}) {
    return (
        <div className="p-5">
            <img src={`https://khademi.liara.run/${image_id}`} alt="" className="img-fluid rounded-4" />
            <h3 className="mt-4 lh-base style-title">{title}</h3>
            <p className="py-4 lh-lg text-justify opacity-75 style-desc">{desc}</p>
        </div>
            
     );
}

export default AboutUsItem;