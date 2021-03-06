import React from 'react'

import {Categories, SortPopUp, PizzaBlock} from '../components';

function Home({items}) {
    return (
      <div className="container">
        <div className="content__top">
            <Categories onClickCategory={(name) => console.log(name)} items={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}/>
            <SortPopUp items={['алфавиту', 'цене', 'популярности']}/>
        </div>
        <h2 className="content__title"> Все пиццы </h2>
        <div className="content__items">
          {
            items.map((obj) => (
            <PizzaBlock key={obj.id} {...obj} />
            ))}
        </div>
      </div>
    )
}

export default Home
