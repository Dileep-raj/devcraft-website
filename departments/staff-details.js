function loadStaffDetails(staffsJSON) {
    const staffs = staffsJSON.staffs
    for (const staff in staffs) {
        // console.log(staff);
        const profileDetails = staffs[staff]
        const image = profileDetails["profile-img"], education = profileDetails["education"], subject = profileDetails["subject"]
        const date = profileDetails["date-of-joining"], experience = profileDetails["experience"], extra = profileDetails["extra"]
        const card = document.createElement("div");
        card.className = "card h-100 staff-card"
        var cardInnerHTML = `
        <img class="card-img-top staff-profile-img" src="${image == "" ? "../blank.webp" : image}" alt="Staff Profile image">
        <div class="card-body">
            <h4 class="card-title">${staff}</h4>
            <p class="card-text">`;

        if (extra != "" && extra != null) cardInnerHTML += `${extra} <br>`
        if (education != "") cardInnerHTML += `Education : ${education} <br>`
        if (date != "") cardInnerHTML += `Date of joining : ${date} <br>`

        if (subject != "" && subject != null) cardInnerHTML += `Subject : ${subject} <br>`
        cardInnerHTML += `Teaching Experience : ${experience} years`
        cardInnerHTML += `</p></div>`;
        card.innerHTML = cardInnerHTML

        const col = document.createElement("div")
        col.className = "col"
        col.appendChild(card)
        staffDetails.appendChild(col)
    }
}