import TreeChild from "../TreeChild/TreeChild"

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
            }, {
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
            // ...
          ]
        },
        // ...
      ]
    return(
        <div>
            {fakeData.map((data, indx) => {
                return (
                    <TreeChild
                        key={indx}
                        treeData={data}
                    />
                )
            })}
        </div>
    )
}

export default Tree