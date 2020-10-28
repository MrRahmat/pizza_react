import React from 'react';

// class Categories extends React.Component {
//   state = {
//     activeItem: 0,
//   };

//   onSelectCategory = index => {
//     this.setState({
//       activeItem : index
//     });
//   };

//   render(){
//     const {items} = this.props;
//     return(
//         <div className="categories">
//             <ul>
//                 {items.map((name, index) => (
//                   <li className={this.state.activeItem === index ? 'active' : ''} onClick={() => this.onSelectCategory(index)} key={`${name}_${index}`}> {name} </li>
//                 ))}
//             </ul>
//         </div>
//     )
//   }
// }

function Categories({items, onClickCategory}) {
  const [activeItem, setActiveItem] = React.useState(0);

    return (
        <div className="categories">
              <ul>
                {items && items.map((name, index) => (
                    <li className={activeItem === index ? 'active' : ''} onClick={() => setActiveItem(index)} key={`${name}_${index}`}> {name} </li>
                ))}
              </ul>
            </div>
    )
}

export default Categories;

