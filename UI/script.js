const orange_heart = "https://i.pinimg.com/originals/10/9d/89/109d89beb4a6d8c1a0ad5eac9e072af8.png";
const gray_heart = "https://clipartart.com/images/gray-heart-clipart.png";
const nothing_is_found_pic = "https://testbanktop.com/wp-content/uploads/2018/01/search_error.png";
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function Post(itemName, description, createdAt, author, photoLink, price, location, hashtags, isOwned) {
    this.itemName = itemName;
    this.description = description;
    this.createdAt = createdAt;
    this.author = author;
    this.photoLink = photoLink;
    this.price = price;
    this.location = location;
    this.hashtags = hashtags;
    this.isOwned = isOwned;
}
var Posts = [];
Posts.push(new Post('Item Name1', 'post 1', new Date('October 23, 2001'), 'Alexander Veremandard', "https://i.stack.imgur.com/y9DpT.jpg", 80, 'Minsk, Belarus', ['hashtag1', 'hashtag2', 'hashtag7'], true));
Posts.push(new Post('Item Name2', 'post 2', new Date('May 1, 2011'), 'Anne Gerasimovich', "https://i.stack.imgur.com/y9DpT.jpg", 21, 'Baranovichi, Belarus', ['hashtag1', 'hashtag8', 'hashtag3', 'hashtag4'], false));
Posts.push(new Post('Item Name3', 'post 3', new Date('November 31, 2001'), 'Mikhail Belevich', "https://i.stack.imgur.com/y9DpT.jpg", 80, 'Warsaw, Poland', ['hashtag1', 'hashtag2', 'hashtag10'], false));
Posts.push(new Post('Item Name4', 'post 4', new Date('June 18, 2001'), 'Olya Korolko', "https://i.stack.imgur.com/y9DpT.jpg", 80, 'Los Angeles, US', ['hashtag2', 'hashtag8', 'hashtag9'], true));
Posts.push(new Post('Item Name5', 'post 5', new Date('July 9, 2001'), 'Ellison Anver', "https://i.stack.imgur.com/y9DpT.jpg", 95, 'Minsk, Belarus', ['hashtag4', 'hashtag7', 'hashtag5'], false));
Posts.push(new Post('Item Name6', 'post 6', new Date('October 23, 2001'), 'Christine Gomez', "https://i.stack.imgur.com/y9DpT.jpg", 80, 'Minsk, Belarus', ['hashtag5', 'hashtag1'], false));
Posts.push(new Post('Item Name7', 'post 7', new Date('October 23, 2001'), 'James Franco', "https://i.stack.imgur.com/y9DpT.jpg", 80, 'Moscow, Russia', ['hashtag4', 'hashtag7', 'hashtag2'], false));
Posts.push(new Post('Item Name8', 'post 8', new Date('October 23, 2001'), 'Alexander Veremandard', "https://i.stack.imgur.com/y9DpT.jpg", 104, 'Johannesburg, Africa', ['hashtag5', 'hashtag9'], false));
Posts.push(new Post('Item Name9', 'post 9', new Date('October 23, 2001'), 'Alexander Veremandard', "https://i.stack.imgur.com/y9DpT.jpg", 80, 'Minsk, Belarus', ['hashtag1', 'hashtag10'], false));
Posts.push(new Post('Item Name10', 'post 10', new Date('October 23, 2001'), 'Alexander Veremandard', "https://i.stack.imgur.com/y9DpT.jpg", 80, 'Minsk, Belarus', ['hashtag5', 'hashtag6', 'hashtag8'], false));
Posts.push(new Post('Item Name11', 'post 11', new Date('October 23, 2001'), 'Alexander Harmaz', "https://i.stack.imgur.com/y9DpT.jpg", 80, 'Minsk, Belarus', ['hashtag3', 'hashtag7'], false));
Posts.push(new Post('Item Name12', 'post 12', new Date('October 23, 2001'), 'Nikita Luzhenko', "https://i.stack.imgur.com/y9DpT.jpg", 80, 'Minsk, Belarus', ['hashtag6', 'hashtag4', 'hashtag1'], false));
Posts.push(new Post('Item Name13', 'post 13', new Date('October 23, 2001'), 'Alexander Veremandard', "https://i.stack.imgur.com/y9DpT.jpg", 80, 'Minsk, Belarus', ['hashtag1', 'hashtag9', 'hashtag2'], false));
Posts.push(new Post('Item Name14', 'post 14', new Date('October 23, 2001'), 'Ivan Ischenko', "https://i.stack.imgur.com/y9DpT.jpg", 80, 'Minsk, Belarus', ['hashtag3', 'hashtag8'], false));
Posts.push(new Post('Item Name15', 'post 15', new Date('October 23, 2001'), 'Alexander Veremandard', "https://i.stack.imgur.com/y9DpT.jpg", 80, 'Minsk, Belarus', ['hashtag5', 'hashtag10', 'hashtag2', 'hashtag4'], false));
Posts.push(new Post('Item Name16', 'post 16', new Date('October 23, 2001'), 'Nina Gornaya', "https://i.stack.imgur.com/y9DpT.jpg", 80, 'Minsk, Belarus', ['hashtag7', 'hashtag4', 'hashtag10'], false));
Posts.push(new Post('Item Name17', 'post 17', new Date('October 23, 2001'), 'Alexander Veremandard', "https://i.stack.imgur.com/y9DpT.jpg", 80, 'Minsk, Belarus', ['hashtag6', 'hashtag2', 'hashtag5'], false));
Posts.push(new Post('Item Name18', 'post 18', new Date('October 23, 2001'), 'Alexander Veremandard', "https://i.stack.imgur.com/y9DpT.jpg", 80, 'Minsk, Belarus', ['hashtag7', 'hashtag9', 'hashtag6'], false));
Posts.push(new Post('Item Name19', 'post 19', new Date('October 23, 2001'), 'Alex Nerovnya', "https://i.stack.imgur.com/y9DpT.jpg", 80, 'Minsk, Belarus', ['hashtag1', 'hashtag2', 'hashtag3'], false));
Posts.push(new Post('Item Name20', 'post 20', new Date('October 23, 2001'), 'Alexander Veremandard', "https://i.stack.imgur.com/y9DpT.jpg", 80, 'Minsk, Belarus', ['hashtag5', 'hashtag2', 'hashtag4'], true));

var hashtagsList = ['hashtag1', 'hashtag2', 'hashtag3', 'hashtag4', 'hashtag5', 'hashtag6', 'hashtag7', 'hashtag8', 'hashtag9', 'hashtag10'];

class PostsHolder {
    getPosts(skip = 0, top = 10, filterConfig = {}) {
        if (typeof skip === 'number' && typeof top === 'number') {
            var finalArr = this._posts;
            if (filterConfig.hasOwnProperty('author')) {
                finalArr = finalArr.filter(x => x.author === filterConfig.author);
            }
            if (filterConfig.hasOwnProperty('dateFrom') && filterConfig.hasOwnProperty('dateTo')) {
                finalArr = finalArr.filter(x => x.createdAt >= filterConfig.dateFrom && x.createdAt <= filterConfig.dateTo);
            }
            if (filterConfig.hasOwnProperty('hashtags')) {
                finalArr = finalArr.filter(x => filterConfig.hashtags.every(elem => x.hashtags.indexOf(elem) > -1));
            }
            for (var i = 0; i < this._posts.length; i++) {
                if (this._posts[i].isChosen)
                    this._posts[i].isChosen = false;
            }
            for (var i = 0; i < finalArr.length; i++) {
                this.editPost(finalArr[i].id, {
                    isChosen: true
                });
            }
            this.chosen_num = finalArr.length;

            finalArr = finalArr.slice(skip, Math.min(skip + top, finalArr.length));
            this.shown_num = finalArr.length;
            return finalArr;
        }
    }
    getPost(id) {
        if (typeof id === 'number')
            return this._posts.find(element => element.id === id);
    }
    validatePost(post) {
        if (post.hasOwnProperty('description') && typeof post.description === "string" && post.description.length < 200 &&
            post.hasOwnProperty('itemName') && typeof post.itemName === "string" && post.itemName.length < 150 &&
            post.hasOwnProperty('createdAt') && post.createdAt instanceof Date &&
            post.hasOwnProperty('author') && typeof post.author === "string" && post.author !== "" &&
            post.hasOwnProperty('photoLink') && typeof post.photoLink === 'string' &&
            post.hasOwnProperty('price') && typeof post.price === "number" &&
            post.hasOwnProperty('location') && typeof post.location === "string" &&
            post.hasOwnProperty('hashtags') && post.hashtags.length <= 5 && post.hashtags.length >= 1 &&
            post.hasOwnProperty('isOwned') && typeof post.isOwned === 'boolean') {
            var temp_post = {};
            Object.assign(temp_post, post);
            temp_post = this._deleteToCheckPost(temp_post);
            if (Object.keys(temp_post).length) return false;
            return true;
        }
        return false;
    }
    _deleteToCheckPost(post) {
        delete post.description;
        delete post.itemName;
        delete post.createdAt;
        delete post.author;
        delete post.photoLink;
        delete post.price;
        delete post.location;
        delete post.hashtags;
        delete post.isOwned;
        return post;
    }
    addPost(post) {
        if (this.validatePost(post)) {
            this._posts.push(post);
            this._posts[this._posts.length - 1].id = this._posts.length;
            this._posts[this._posts.length - 1].isLiked = false;
            this._posts[this._posts.length - 1].isChosen = false;
            return true;
        }
        return false;
    }
    editPost(id, post) {
        if (typeof id === 'number' && this._checkpost(post) && typeof this._posts.find(x => x.id === id) !== "undefined") {
            var curPost = this._posts.find(x => x.id === id);
            var keys = Object.keys(post);
            for (var i = 0; i < keys.length; i++) {
                curPost[keys[i]] = post[keys[i]];
            }
            return true;
        }
        return false;
    }
    _checkpost(post) {
        if ((post.hasOwnProperty('description') && typeof post.description === "string" && post.description.length < 200) ||
            (post.hasOwnProperty('itemName') && typeof post.itemName === "string" && post.itemName.length < 150) ||
            (post.hasOwnProperty('isLiked') && typeof post.isLiked === "boolean") ||
            (post.hasOwnProperty('price') && typeof post.price === "number") ||
            (post.hasOwnProperty('hashtags') && post.hashtags.length <= 5 && post.hashtags.length >= 1) ||
            (post.hasOwnProperty('isChosen') && typeof post.isChosen === 'boolean') ||
            (post.hasOwnProperty('photoLink') && typeof post.photoLink === 'string')) {
            return true;
        } else return false;
    }
    removePost(id) {
        if (typeof id === 'number' && typeof this._posts.find(x => x.id === id) !== "undefined") {
            for (var i = 0; i < this._posts.length; i++) {
                if (this._posts.find(x => x.id === id) === this._posts[i])
                    this._posts.splice(i, 1);
                return true;
            }
        } else return false;
    }
    addAll(posts) {
        var arrOfInvalid = [];
        for (var i = 0; i < posts.length; i++) {
            if (this.validatePost(posts[i])) {
                this._posts.push(posts[i]);
                this._posts[this._posts.length - 1].id = this._posts.length;
                this._posts[this._posts.length - 1].isLiked = false;
                this._posts[this._posts.length - 1].isChosen = false;

            } else arrOfInvalid.push(post);
        }
        return arrOfInvalid;
    }
    clear() {
        this._posts.splice(0, this._posts.length);
    }

    constructor(posts) {
        this._posts = [];
        var k = 0;
        for (var i = 0; i < posts.length; i++) {
            if (this.validatePost(posts[i])) {
                this._posts[k] = {};
                Object.assign(this._posts[k], posts[i]);
                this._posts[k].id = k + 1;
                this._posts[k].isLiked = false;
                this._posts[k].isChosen = false;
                k++;
            }
        }
    }
    get posts() {
        return this._posts;
    }

}

function setFilter() {
    var filter_form = document.getElementById('filter_form');

    var checkboxHashtags = document.createElement('input');
    checkboxHashtags.type = "checkbox";
    checkboxHashtags.id = "hashtags";
    filter_form.appendChild(checkboxHashtags);

    var label = document.createElement('label');
    label.htmlFor = "hashtags";
    label.innerText = "Hashtags";
    filter_form.appendChild(label);

    var apply_button = document.createElement('button');
    apply_button.setAttribute('id', 'apply_changes');
    apply_button.setAttribute('type', 'button');
    apply_button.setAttribute('onclick', 'selector()');
    var link = document.createElement('a');
    link.setAttribute('href', '#default');
    link.innerHTML = "APPLY";

    var ul_hashtags = document.createElement('ul');
    ul_hashtags.setAttribute('style', 'list-style: none;');
    for (var i = 0; i < hashtagsList.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" id="hashtag${i+1}">
        <label for="hashtag${i+1}">${hashtagsList[i]}</label><br>`
        ul_hashtags.appendChild(li);
    }

    filter_form.appendChild(ul_hashtags);
    apply_button.appendChild(link);
    filter_form.appendChild(apply_button);
}

function createInitialPosts() {
    const cont = document.getElementById('cont');
    var initArr = allArr.getPosts(0, 10);
    var posts_ul = document.createElement('ul');
    posts_ul.setAttribute('style', 'list-style: none;');
    posts_ul.setAttribute('id', 'posts');
    cont.appendChild(posts_ul);

    for (var i = 0; i < initArr.length; i++) {
        createPost(initArr[i], posts_ul);
    }
    allArr.shown_num = Math.min(10, initArr.length);
    for (var i = 0; i < initArr.length; i++) {
        if (initArr[i].isOwned) {
            document.getElementById(`delete_post${i+1}`).style.display = "inline";
            document.getElementById(`edit_post${i+1}`).style.display = "inline";
        }
    }
}

function createPost(post, container) {
    var li = document.createElement('li');
    li.id = post.id;
    var heart = post.isLiked ? orange_heart : gray_heart;

    li.innerHTML = `<img src=${post.photoLink} id="def_pic" width="150" height="100">
        <img src=${heart} id="heart" width="20" height="18">
        <div id="item_name">${post.itemName}</div>
        <div id="price">${post.price}$</div>
        <div id="seller_name">${post.author}</div>
        <div id="location">${post.location}</div>
        <div id="time">${post.createdAt.toDateString()}</div>
        <button type="button" id="delete_post${post.id}">
            <a href="#default">DELETE POST</a>
        </button>
        <button type="button" id="edit_post${post.id}">
            <a href="#default">EDIT POST</a>
        </button>`;

    var hashtagsList = document.createElement('ul');
    hashtagsList.setAttribute('style', 'list-style: none;');
    hashtagsList.setAttribute('id', 'hashtags_list');
    for (var j = 0; j < post.hashtags.length; j++) {
        var cat_li = document.createElement('li');
        cat_li.innerHTML = `<li id="category${j}">${post.hashtags[j]}</li>`;
        hashtagsList.appendChild(cat_li);
    }

    li.appendChild(hashtagsList);
    container.appendChild(li);
}

function createShowMoreButton() {
    const cont = document.getElementById('cont');
    var show_more_button = document.createElement('button');
    show_more_button.setAttribute('id', 'show_more_button');
    show_more_button.setAttribute('type', 'button');
    show_more_button.setAttribute('onclick', 'showMore()');
    var link = document.createElement('a');
    link.setAttribute('href', '#default');
    link.innerHTML = "Show more";
    show_more_button.appendChild(link);
    cont.appendChild(show_more_button);
}

function getMonth(input) {
    for (var i = 1; i <= 12; i++) {
        if (input == i) return months[i + 1];
    }
    return '';
}

function selector() {
    var filterConfig = {};
    var author_check = document.getElementById('author');
    var date_check = document.getElementById('date');
    var hashtags_check = document.getElementById('hashtags');
    if (author_check.checked) {
        var input = document.getElementById('author_input').value;
        if (input === "") errorWithFilter();
        filterConfig.author = input;
    }
    if (date_check.checked) {
        var fromDay = document.getElementById('day1').value;
        var fromMonth = (typeof document.getElementById('month1').value === "string") ? document.getElementById('month1').value : getMonth(document.getElementById('month1').value);
        var fromYear = document.getElementById('year1').value;
        var toDay = document.getElementById('day2').value;
        var toMonth = (typeof document.getElementById('month2').value === "string") ? document.getElementById('month2').value : getMonth(document.getElementById('month2').value);
        var toYear = document.getElementById('year2').value;
        var from = new Date(`${fromMonth} ${fromDay}, ${fromYear}`);
        var to = new Date(`${toMonth} ${toDay}, ${toYear}`);
        if (typeof fromDay !== 'number' || fromDay < 1 || fromDay > 31 || fromMonth === '' || typeof fromYear !== 'number' || fromYear > 2021 || typeof toDay !== 'number' ||
            toDay < 1 || toDay > 31 || toMonth < 1 || toMonth > 12 || typeof toMonth === 'undefined' || typeof toYear !== 'number' || toYear > 2021 || from > to) errorWithFilter();
        else {
            filterConfig.dateFrom = from;
            filterConfig.dateTo = to;
        }
    }
    if (hashtags_check.checked) {
        var list = [];
        for (var i = 0; i < hashtagsList.length; i++) {
            if (document.getElementById(`hashtag${i+1}`).checked) list.push(hashtagsList[i]);
        }
        filterConfig.hashtags = list;
    }
    browseNewPosts(filterConfig);
}

function browseNewPosts(filterConfig) {
    var posts_ul = document.getElementById('posts');
    posts_ul.innerHTML = "";
    document.getElementById('show_more_button').style.display = "none";

    var newArr = allArr.getPosts(0, 10, filterConfig);
    if (newArr.length) {
        for (var i = 0; i < newArr.length; i++) {
            createPost(newArr[i], posts_ul);
        }
        if (allArr.chosen_num > 10)
            document.getElementById('show_more_button').style.display = "inline";
        for (var i = 0; i < newArr.length; i++) {
            if (newArr[i].isOwned) {
                document.getElementById(`delete_post${newArr[i].id}`).style.display = "inline";
                document.getElementById(`edit_post${newArr[i].id}`).style.display = "inline";
            }
        }
    } else {
        var nothing_pic = document.createElement('img');
        nothing_pic.src = nothing_is_found_pic;
        nothing_pic.id = "nothing_found";
        nothing_pic.style.width = '375px';
        nothing_pic.style.height = '416px';
        posts_ul.appendChild(nothing_pic);
    }

}

function showMore() {
    var addArr = allArr.getPosts(allArr.shown_num, allArr.shown_num + Math.min(10, allArr.posts.length - allArr.shown_num));
    for (var i = 0; i < addArr.length; i++) {
        createPost(addArr[i], document.getElementById('posts'));
        if (addArr[i].isOwned) {
            document.getElementById(`delete_post${addArr[i].id}`).style.display = "inline";
            document.getElementById(`edit_post${addArr[i].id}`).style.display = "inline";
        }
    }

    allArr.shown_num += Math.min(10, allArr.posts.length - allArr.shown_num);

    if (allArr.shown_num === allArr.posts.length) document.getElementById('show_more_button').style.display = "none";
}

function errorWithFilter() {
    alert('Wrong input!!');
    window.location.reload();
}

setFilter();
var allArr = new PostsHolder(Posts);
createInitialPosts();
createShowMoreButton();