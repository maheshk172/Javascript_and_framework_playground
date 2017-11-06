var userCount = function() {
    var count = db.users.count();

    var entry = {_id: Date(), n:count};

    db.UserCountHistory.save(entry);

    print("\n Todays User Count: " + entry.n);
};

userCount();