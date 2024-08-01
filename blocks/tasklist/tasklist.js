export default async function decorate(block) {
    let tasklist = block.querySelector("#tasklistcontainer");
    const fusionResp = await fetch("https://hook.app.workfrontfusion.com/lhsblchsgc93w2q9u2y48fu9m1i7s4om");
    const jsonList = await fusionResp.json();

    if (jsonList) {
        console.log("jsonList: " + JSON.stringify(jsonList));
        for(i=0;i<jsonList.tasks;i++) {
            const li = document.createElement('li');
            li.textContent(jsonList.tasks[i].title);
            tasklist.append(li);
        }
    }
}