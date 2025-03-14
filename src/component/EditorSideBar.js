'use client'
const EditorSideBar = () => {
    
    const Elements = ["Button", "Image", "Text", "Card", "Link"];
    const handleDrag = (e, element) => {
        e.dataTransfer.setData("text/plain", element); // Store as "text"
        e.dataTransfer.effectAllowed = "move"; // Ensure dragging effect
    };

    return (
        <div className="bg-amber-300 h-[100vh] w-[30vw] rounded-r-xl p-5">
            <h1>
                Choose Component
            </h1>

            <div className="flex flex-col gap-5 rounded-xl bg-amber-100 p-5">
         {Elements.map((e,i)=>{
            return(   <h1 key={i}
             draggable
             onDragStart={(event) => handleDrag(event, e)}
            className="px-5 bg-amber-500 py-2 rounded-md hover:bg-amber-200">
                {e}
            </h1>)
         })}
              
            </div>
        </div>
    )
}

export default EditorSideBar;