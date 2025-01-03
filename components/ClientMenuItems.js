"use client";
import React, { useState, useEffect, useRef, memo } from 'react';
import dynamic from 'next/dynamic';
import { FaShoppingCart } from 'react-icons/fa';

const DynamicMenuCard = dynamic(() => import('./MenuCard'), { suspense: true });
const DynamicCartModal = dynamic(() => import('./CartModal'));

const MenuCard = memo((props) => <DynamicMenuCard {...props} />);
MenuCard.displayName = 'MenuCard';

const ClientMenuItems = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [menuData, setMenuData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const categoryRefs = useRef({});

  useEffect(() => {
    const fetchMenuData = async () => {
      const data = await import('@/Data/MenuData');
      setMenuData(data.default);
      setIsLoading(false);
    };

    fetchMenuData();
  }, []);

  useEffect(() => {
    if (isCartOpen) {
      document.body.classList.add('disable-scroll');
    } else {
      document.body.classList.remove('disable-scroll');
    }
  }, [isCartOpen]);

  useEffect(() => {
    if (expandedCategory !== null && categoryRefs.current[expandedCategory]) {
      categoryRefs.current[expandedCategory].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [expandedCategory]);

  const calculateSubtotal = () => {
    return selectedItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('Rs. ', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const subtotal = calculateSubtotal();

  const removeFromCart = (itemId) => {
    setSelectedItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  const toggleCategory = (categoryId) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
    }
  };

  return (
    <>
      <section className="pb-10  ">
        <div className="relative w-[100vw] h-[450px]">
          {children}
          <div className="absolute z-10 top-10 right-16  lg:right-12 flex items-center">
            <div className="relative">
              <FaShoppingCart
                className="text-[#ffdc7c] text-3xl cursor-pointer"
                onClick={() => setIsCartOpen(true)}
              />
              {selectedItems.length > 0 && (
                <div className="absolute -top-2 -right-2 bg-white text-[#ffdc7c] text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {selectedItems.length}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="relative  w-full md:w-[60vw] mx-auto mt-5">
          {menuData.map((elm) => (
            <div className='px-5' key={elm.id} ref={el => categoryRefs.current[elm.id] = el}>
              <h1
                className="text-2xl font-bold   text-white hover:text-[#ffdc7c] font-pirata-one tracking-widest my-2 cursor-pointer"
                onClick={() => toggleCategory(elm.id)}
              >
                {elm.title}
              </h1>
              <hr />
              {expandedCategory === elm.id && (
                <div className="mt-2">
                  <MenuCard
                    loading={isLoading}
                    menuItem={elm}
                    selectedItems={selectedItems}
                    setSelectedItems={setSelectedItems}
                    setIsCartOpen={setIsCartOpen}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {isCartOpen && (
        <DynamicCartModal
          setIsCartOpen={setIsCartOpen}
          isCartOpen={isCartOpen}
          items={selectedItems}
          subtotal={subtotal}
          calculateSubtotal={calculateSubtotal}
          removeFromCart={removeFromCart}
        />
      )}
    </>
  );
};

export default ClientMenuItems;