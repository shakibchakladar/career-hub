
const Category = ({category}) => {
    const{logo,category_name,availability}=category;
    return (
        <div className="border-black">
            <img className="w-28" src={logo} alt="" />
            <h2>{category_name}</h2>
            <p>{availability}</p>
            
        </div>
    );
};

export default Category;