export const Card = ({ title,description,id }) => (
    
       <div className="flex-container">
           <div className="section">
               
                    <h2>{title}</h2>

                <span className="status">
                    <span className="status__icon"></span> {description}
                </span>
            
                <span className="text-gray">number of pages:</span>
             
                   {id}
       
            </div>
       </div>
         
     
);
