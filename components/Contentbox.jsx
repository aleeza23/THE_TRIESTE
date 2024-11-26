const Contentbox = ({ children }) => {
    return (
        <main className="flex-grow w-[100vw]">
            <div className="scroll-box h-full">
                <div className="scroll-inner">
                    <div className="relative   w-full h-full bg-black">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contentbox;
