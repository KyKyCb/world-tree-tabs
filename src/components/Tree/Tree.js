import TreeMainBrunch from "../TreeBrunch/TreeMainBrunch"

const Tree = ()=>{

    const fakeData = [
        {
            "name": "Parent1",
            "children": [
            {
                "name": "children1",
                "children": [
                {
                    "name": "children1",
                    "children": [
                    {
                        "name": "children1",
                        "children": [
                        {
                            "name": "children1",
                            "children": [
                            ]
                        }
                        ]
                    }
                    ]
                }
                ]
            }, 
            {
                "name": "children1",
                "children": [
                // ...
                ]
            },
            // ...
            ]
        }, {
            "name": "Parent2",
            "children": [
                {
                    "name": "children1",
                    "children": [
                    {
                        "name": "children1",
                        "children": [
                        {
                            "name": "children1",
                            "children": [
                            {
                                "name": "children1",
                                "children": [
                                ]
                            }
                            ]
                        }
                        ]
                    }
                    ]
                }, 
                {
                    "name": "children1",
                    "children": [
                    // ...
                    ]
                },
                // ...
                ]
        },
        // ...
        ]
    return(
        <div>
            {fakeData.map((data, indx) => {
                return (
                    <TreeMainBrunch
                        key={indx}
                        treeData={data}
                    />
                )
            })}
        </div>
    )
}

export default Tree