// Define a new module for our app. The array holds the names of dependencies if any.
var app = angular.module("instantSearch", []);

// Create the instant search filter

app.filter('searchFor', function(){

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

// The controller
function InstantSearchController($scope) {

	// The data model. These items would normally be requested via AJAX,
	// but are hardcoded here for simplicity. See the next example for
	// tips on using AJAX.

	$scope.items = [
		{
			title: "Is Someone in Heaven Expecting to see you there? Live For Jesus Now",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "How sad! They can Display a witch on a Public School Wall But Not The 10 Commandments",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "I am not ashamed of the Gospel of Christ: for it is the Power of God unto Salvation to everyone that believeth. Romans 1:16",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "New life in Christ",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Caterpillar to Butterfly",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Jesus is the reason for CHRISTMAS",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Jesus said, Confess me before men & I'll confess you before my father in Heaven. Read Matt. 10:32",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "GOD IS SO GOOD",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Faith without works is dead (James 2:20)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "A Prayer for Everyone: \"God be merciful to me a sinner\"",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "They took the Bible out of the schools & now your tax dollars build many prisons",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "JESUS IS MY ANCHOR IN THE STORMS",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Don't wait for 6 strong men to take you to church",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "JESUS LOVES YOU",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "JESUS CHRIST - The Greatest Person In World History - Follow Him",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "THE EMPTY TOMB JESUS CHRIST",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "They took prayer & Bible from public schools and now they have shootings",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The Bible is True & Relevant 3400 years ago it said eat no fat. Read Leviticus 7:23-24",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Get Right with God or Get Left",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The Overwhelming Evidence Supports Creation, Not Evolution",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The BIBLE says Mary was with CHILD, Not with a Blob of Tissue",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Have the Attitude of Gratitude",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Whatsoever ye do, do all for the glory of God - 1 Cor. 10:31",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "If you marriage is on the rocks, put it on the ROCK †",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Euthanasia is Adult Abortion",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "EVERY ABORTION Takes a Human Life",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "CHOOSE ABSTINENCE TILL MARRIAGE",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Don't let some scumbag steal your Precious Virginity",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Don't Ignore JESUS He died for Your Sins",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "KEEP CHRIST in CHRISTMAS",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "\"Everybody was doing it\" Won't hold water on JUDGMENT DAY",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Education MINUS Biblical morality EQUALS our present Public School mess (Prov 22-6)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Drugs Will Take You Farther Than\nYou Want to Go, Keep You Longer\nThan You Want to Stay & Cost You\nMore than You Want to Pay",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Drugs hurry you to an early grave",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Drive so your license\nExpires before you do",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Drugs can cost you your money, your job, your family, your house, your health AND YOUR LIFE",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Don't Pray for a light load Pray for a strong back",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Without Virtue there can be no liberty - Benjamin Rush",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Turn off TV & get to know your family",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "A Family Altar Can Alter a Family",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Kindness is hard to give away because it keeps coming back",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "There's Room at the Cross for you †",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The Resurrection of Christ puts Christianity far above all other religions †",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Hell is full of procrastinators Live for Jesus Now",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Feminist Susan B. Anthony Called Abortion \"Horrible Crime of Child-Murder\"",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "What's happened to Christmas! JESUS Died For Your Sins Not Santa Claus",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "What Right does the Liberal Media have to impose it's filth on us?",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "EVOLUTION - The Big Lie",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "School Condoms Distribution Amounts to the Government SPONSORING FORNICATION",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "ABORTION - The Supreme Court Also LEGALIZED SLAVERY",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Left Wing Atheists call us \"The Religious Right\"",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The devil sails a sinking ship let JESUS be your Captain",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Patrick Henry said \"This Great Nation was founded... on the Gospel of JESUS CHRIST\"",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Many Who Plan to SEEK GOD at the 11th Hour Die at 10:30",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "In case of Nuclear Attack, Prayer will be restored to public schools",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Don’t follow the crowd unless they’re following JESUS",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Evolution: When \"scientists\" made monkeys of themselves",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "BOYCOTT Hell - Repent",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Live for Jesus Now & Spend Eternity in the Non-Smoking Section",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "If God is your Co-Pilot, SWITCH SEATS",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "How Sad - Kids run wild & Dogs go to Obedience School",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Real Success is Ending up in Heaven",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Live so the Preacher Won’t Have to Lie At Your Funeral",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "They took the Bible out of the Schools and now the Prisons are full (Prov. 22:6)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Forget Peer Pressure Don’t Let Your \"friends\" Send You to Hell",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Evolution is Science Fiction",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "If you were on Trial for Being A Christian, would there be enough Evidence to convict you?",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Say No to Drugs And Yes to Jesus",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Any Sex that can Put You in Hell ISN’T SAFE",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "How Can God Bless America when we Kicked HIM out of our Schools?",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Isn’t it rather hypocritical To favor abortion when You’ve already been born?",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "On Judgment Day You’ll Meet FATHER GOD, not mother earth!",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "GODLY PARENTS An Endangered Species",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "I wish they were as Determined to keep Drugs out of the Schools, as they are the Bible",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Jesus died for you will you Live for HIM?",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "What can wash away your sins? - Nothing but the Blood of JESUS",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "When schools had Prayer & Bible - they had no drugs",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Invite JESUS into Your Life",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Pro-Choice - a nice way to say MURDER",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "When God calls Time the Game is Over - which Exit will You take?",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The Family That Prays Together Stays Together",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Repent - It’s not \"cool\" to be in hell!",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "\"It is Impossible to Rightly Govern the World Without God & the Bible\" (George Washington)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "I’m Glad Mary & Joseph Were not Pro-Choice",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "JESUS now Waits at You Heart’s Door Don’t act like you’re not home (Rev. 3:20)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Study for your finals, Read the Bible daily",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "You wouldn’t Dump Garbage In your Living Room So Why let TV do it?",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "On Judgment Day you’ll wonder Why you got so excited about Money instead of JESUS",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "True Love Waits For Marriage",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Fairy Tales Say A Frog Became A Prince \"Scientists\" call it Evolution",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "DIVORCE HURTS CHILDREN",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Darkness fills the School house because the light of Christ is gone",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "All Scripture is given by inspiration of God (2 Timothy 3:16)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Drugs will turn you into a Basket or Casket case",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "If you ignore JESUS there's Hell to pay",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "I Bet the Pro-Choicers Are Glad their Parents Weren't",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "God why didn't you save the students from being killed? I Wasn't Allowed in School",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Everyone will Believe the Bible on Judgment Day",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "JESUS SAVES - RECEIVE HIM",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Prohibiting School Prayers Amounts to the State Sponsoring Atheism",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "What are you doing for JESUS? You'll Meet Him on Judgment Day",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The Lord is not willing that any should perish, but that all come to repentance\nRead II Peter 3:9",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Smile! You could have been Aborted",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "CHOICE # 1 PRAYER & BIBLE IN SCHOOLS CHOICE # 2 HIRE MORE POLICE",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "When recruiting, the devil paints a beautiful picture of sin, but hell is HORRIBLE",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Forbidden Fruit can get you in some Bad Jams",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "GOD BLESS YOU",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "If we Abide by the Principles taught in the bible, our Country Will go on Prospering (Daniel Webster)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The Supreme court Opens With Prayer Why Can’t Public Schools?",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "School SHOOTINGS PROVE When You Take God Out You Invite The devil in",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Ignoring Jesus is like Refusing Titanic’s Lifeboat",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "If Jesus came to your house would you watch the same TV shows?",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Abstinence Makes the Heart grow fonder",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "For God so loved the world, that He Gave His only begotten Son, that whosoever believeth in Him should not perish, but have everlasting life (John 3:16)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "On Judgment Day You’ll Wish You had been Biblically Not Politically correct",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "God sends no one to hell Those who Ignore JESUS Send themselves there",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "\"Whatever Makes Men Good Christians, Makes Them Good Citizens\" (Daniel Webster)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "You Who Favor Abortion Would You Have Wanted it for Yourself?",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Stop Abortion America! GOD punishes National Sins By National Disasters",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Stop Divorce - The Basis of Marriage is Commitment Not Just Romantic Love",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "\"But for this Book (The Bible) We Could not know Right From Wrong\" (Abraham Lincoln)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Abortion - The Leading Cause of Death in America",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "\"Where can the Principles of morality be learned so clearly or so perfectly as from the New Testament\" (US Supreme Court 1844)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Christian Bashing - The Only Acceptable Form of Hate left in America",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The Bible was the most quoted Book by our founders & is now the most censored Book in America",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "\"Those Who Will Not be Governed By God Will Be Ruled by Tyrants\" (William Penn)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Repent & Live for Jesus Is the Advice You Could Get from Everyone in Hell",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "I Don’t Have Enough FAITH To Believe in Evolution",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The Secret to My Success?... It is Found in the BIBLE, \"In All Thy Ways Acknowledge Him & HE Shall Direct Thy Paths\" (Dr. George Washington Carver)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Evolution Says Nothing times Nobody Equals Everybody",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "\"...Of All Books (The Bible)... Contributes Most to Make Men Good, Wise, & Happy\" (Pres. John Quincy Adams)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "JESUS Is Coming Back, BE READY!",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The Bible \"A Book Worth More than all the other Books that were ever printed\" (Patrick Henry)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Forget Evolution The MISSING Link Is Still MISSING",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "\"I shall Allow No Man to Belittle My Soul by Making Me Hate Him\" (Dr. Booker T. Washington)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The First Man Was ADAM NOT NEANDERTHAL",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "ABSTINENCE Till Marriage The Only Safe Way",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "\"We are a Christian People...& Acknowledge with reverence The Duty of Obedience to the Will OF GOD\" (US Supreme Court 1931)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "\"To Suppose that the Eye... Could Have Been Formed by Natural Selections, Seems I Freely confess, Absurd in the Highest Degree\" (Darwin)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Evolution Is Junk science",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Life can be hard but with DRUGS it's IMPOSSIBLE.",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "BELIEVE †",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "On Judgment Day you'll wish your car had JESUS STICKERS",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "HOLINESS UNTO THE LORD",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "He said He would RETURN - JESUS CHRIST",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Follow the REAL leader Jesus Christ",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "JESUS loves me this I know for the BIBLE tells me so",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Read the BIBLE to be Wise Believe it to be Saved Practice it to be Holy",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "When the devil reminds you of your past, REPENT & REMIND him of his future",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "What a Wonderful Change since JESUS came into My Life",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Stay at Home Moms Rule the World. The Hand that Rocks the Cradle Rules the World.",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "\"Let the wicked forsake his ways & the unrighteous man his thoughts &... return unto the Lord... for He will abundantly pardon.\" Read Isaiah 55:7",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Don't expect a party in hell\nIt's canceled due to FIRE",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Don't be a Spiritual Wreck\nWork out Daily\nWith Prayer and Bible",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Death Forgets No One\nLive For JESUS Now",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Dare to be Different\nLive for JESUS",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "\"Daily frame me more & more into the likeness of thy Son, Jesus Christ\" George Washington",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Count your blessings",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Congress Opens with Prayer Why can't Public Schools?",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Condoms Con You Into Thinking You're Safe",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "CHURCH - You're Not too Bad to Come In & You're Not too Good TO STAY OUT",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Christians never part For the Last Time BE ONE",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "CHRISTIAN UNDER CONSTRUCTION",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Christians have the best life now\nIf they're wrong they loose nothing\nIf others are wrong it's hell to pay",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Christians Aren't Sinless,\nBut They Should Sin Less",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Call upon the Uppertaker before your family calls the Undertaker (Read Acts 2:21)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "By Age 18, The Average TV Viewer Has Seen 250,000 Violent Acts & 40,000 Murders",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Blessed is the Nation whose GOD is the LORD (Psalm 33:12)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Better to Carry a Baby for 9 Months, than carry Guilt all your life",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Be nice to everyone, you don't know who will be on your jury trial.",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Believe on the Lord Jesus & Thou Shalt Be Saved Acts 16:31",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Begin a move toward God Open your BIBLE",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Backsliders Jump From the Lifeboat to the Titanic",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "At the End of the Road - GOD",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "\"A Thorough Knowledge of The BIBLE is Worth More Than a college education\" Teddy Roosevelt",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Atheistic Judges impose their godless values on the whole country",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "A SMILE does a lot for your Face Value",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "ARCHEOLOGY Confirms the Bible's Accuracy",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Are You Following JESUS this Close?",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "AN EMBRYO IS A BABY",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "America was Founded on Christian & Biblical principles",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "\"America was Born A Christian Nation\" President Woodrow Wilson",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "America's Only Hope Back to GOD & The BIBLE",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "America - Repent or Perish",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "AMERICA - One Nation Under God",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "AMERICA BLESS GOD",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Abstinence till Marriage Keeps you from being used",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "ABORTION - The Leading Cause of Missing Children",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "ABORTION - AMERICA'S AUSCHWITZ",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "ABORTION! 44 Million American Children will never Laugh, Sing or Play",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "ABORTION The Ultimate Child Abuse",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "A life without JESUS is a Dead-end street",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "You Owe It To Your Soul To Live For JESUS NOW",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "(FETUS) Feed us Don't KILL us",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Prepare to Meet Thy God Live for JESUS Now",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "JESUS IS LORD",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "JESUS SAVES",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Jesus Taught Us to Return Good for Evil (read Matthew 5:38-48)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "PRAISE THE LORD",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "If the Power of the Gospel in not felt throughout… the Land, anarchy… & misery... will reign. (Daniel Webster)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Abstinence lets you Finish Your Education and Pursue your Dreams",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The Major Media has moved Christians to the back of the bus, & filth to the front",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Abortion IS NOT a Right IT'S A WRONG",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "ABSTINENCE PAYS",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Who wants Genital Warts?",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "\"The BIBLE should be read in our schools in Preference to all other books\" (Founding Father Benjamin Rush)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "In 1782 the US Congress Printed Bibles for Schools. Separation of Church & State?",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "God sends you Flowers Ever Spring - Thank Him",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Secondary Virginity, You can't change your past, but You can change your future",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Whosoever shall call upon the Name of the Lord shall be saved. Romans 10:13",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Let the Redeemed Of the Lord Say So. Psalm 107:2",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Abstinence - The Best Choice",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "God Forgives the Penitent",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "PUBLIC SCHOOLS NEED THE 10 COMMANDMENTS - ESPECIALLY \"THOU SHALT NOT KILL\"",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Choose Abstinence - Don't Worry if they leave you. Worry about what they could leave you with (aids, herpes, syphilis, pregnancy, etc.)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "As for me & my House, we will Serve the Lord. Joshua 24:15",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The Pilgrims came to America \"For the propagation & advance of the Gospel of… Christ.\" (Founding Father WM Bradford)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "They kicked God out of the Schools & then sing God Bless America",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Hey Teens! Self Control Beats Birth Control",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "How about America Blessing GOD by Ending Abortions, TV filth & Violence, Etc…",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Don't wait for 6 strong men to take you to church",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Premarital sex puts you on the USED car lot",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "On Judgment Day you'll wish your car had JESUS STICKERS",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "TV Filth Insults Decent People",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Say NO to Alcohol and other Drugs",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "...I Advise No One to Place His Child where The Scriptures Do Not Reign Paramount (Martin Luther)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "\"I Believe the Bible is the Best Gift GOD has given to Man\" (Abraham Lincoln)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "If Thou Shalt Confess with thy Mouth the Lord Jesus, & Believe In Thine Heart that God hath Raised Him from the Dead, thou shalt be saved (Read Romans 10:9)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "If you believe in evolution I’ll sell you the Brooklyn Bridge",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "If you’re a Baby Boomer, Be Glad Abortion wasn’t Legal then",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "If you won’t Forgive I Hope you Never sin Read Matt 18:21-35",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Ignoring JESUS is choosing hell",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "In all your thoughts is there room for GOD?",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Include GOD in your life, Read the Bible daily",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "IN GOD I TRUST",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "In Memory of the 40+ Million Aborted Babies Killed in America since 1973",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "In the absence of any other proof the thumb alone would convince me of God’s existence (Sir Isaac Newton)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "In the Beginning God Created The Heaven and the Earth (Gen1:1)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "I serve a risen Savior - JESUS",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Isn’t It Time For JESUS?",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Is Your BIBLE Dusty?",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "\"It is when people Forget God that Tyrants forge their chains\" (Patrick Henry)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "It’s Cool to be a Virgin till Marriage",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "It Takes More Faith to Believe Evolution than Creation",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "JESUS CHRIST NAME ABOVE ALL NAMES",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "JESUS CHRIST - The Greatest Person In World History - Follow Him",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "JESUS CHRIST † SOUL GUARD",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Jesus gave Thanks At Meal time. Do You?",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "JESUS Gives More Abundant Life (John 10:10)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "JESUS Gives New Beginnings",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Now Is The Day Of Salvation",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "JESUS gives purpose to your Life",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "JESUS IS GOD",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "JESUS is the ONLY WAY to HEAVEN Read John 14:6 & Acts 4:12",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "JESUS LIVES",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "JESUS ♥‘S YOU",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "JESUS said \"Bless them that curse you\" Matt 5:44",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "JESUS Said, \"FOLLOW ME\"",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Jesus said If you’re ashamed of Me and My Word, I’ll be ashamed of you (read: Luke 9:26)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Jesus said \"He that believeth on ME hath everlasting life\" (John 6:47)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Jesus Said \"Him That Cometh to Me I Will In No Wise Cast Out\" John 6:37",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "STOP ABORTION! Everyone deserves a Birthday",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "STOP THE RUNAWAY LIBERAL COURTS\nThat change the DEFINITION OF MARRIAGE",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Stop TV filth, abortions etc.\nso God can bless America",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Strange how people believe A Biased Newspaper But Question the BIBLE",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Take it to the Lord in Prayer",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Talk about \"In Your Face\" What about TV Filth Profanity & Violence",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Test your Christianity; Will the devil be relieved when you die?",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "\"That Book (The Bible) is the Rock on which Our Republic Stands\" (President Andrew Jackson)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The Atonement of JESUS CHRIST Is the ONLY Remedy & Rest for My Soul - Pres. Martin Van Buren",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "\"...The Bible, has furnished All Necessary Rules To Direct our Conduct\" (Noah Webster)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The BIBLE is the Greatest Book ever written, \nput it back in Public Schools",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The Bible is the Only Book that makes people Good \nPut it back in public schools",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The BIBLE IS the only Book \nWith Accurate Prophecies",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The Bible is True \nJesus Changed my Life",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The Bible Says All Liars Have Their Place In the Lake of Fire (Rev. 21:8)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The Bible says \"confess your faults\" (not other people’s) Read James 5:16",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The Bible says: God Hates Divorce (read Malachi 2:16)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The Bible says God will Spit Lukewarm Christians out of His mouth (Read Revelation 3:15 & 16)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The Bible will keep you From Sin, or Sin will Keep you from the Bible",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The Big Bang Theory is a joke An explosion in a print shop couldn’t create a dictionary",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The Brutal Horrors of World War Two Death Camps are Found in Abortion Clinics",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The Cry from Hell\"Why did I Ignore JESUS?\”",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The Day of the Lord will come as a thief in the Night (2 Pet.3:10)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The devil’s favorite words\"You’ve got lots of time to get saved\"",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The devil keeps changing names: dirty movies are Now called adult movies",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The devil offers Sinful Pleasures - but always hides the Price Tag",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The evolutionist’s prayer \"Our father which art in a tree\"",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The Eyes of the Lord are in every place, beholding evil and good. Proverbs 15:3",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The fear of the Lord is the beginning of wisdom Proverbs 9:10",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The First Man Was ADAM NOT NEANDERTHAL",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The Fool Hath Said In His Heart, \nThere is no God. (Psalm 53:1)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "The Godly miss out on STD Hangovers, etc. and hell",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Abortion is big people Killing little people",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Abortion is killing your future friends",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Adoption - Unborn Babies CAN LIVE WITH IT",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "AIDS & 56 million American STD cases - Welcome to the \"Wonderful World of Sexual Freedom\"",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Are You a SECRET SERVICE CHRISTIAN? Read Luke 9:26",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "A smile is an inexpensive way to improve your looks",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "As for me & my Car, we will Serve the Lord",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "A Smile is the Universal Language, Speak it Often",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "A soft answer turneth away wrath. (Proverbs 15:1)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Behold the Lamb of God, which taketh away the sin of the world - JESUS CHRIST(Read: John 1:29)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Call Me an Extremist but I Think Dismembering Unborn Babies is Wrong",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "CAN’T SLEEP? Try Counting your Blessings",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "CA SIN 0",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Change your ways or GOD Will Change your Location",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Choose Abstinence \nSome STD’s are forever",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Choose you this day whom \nYou will Serve (Joshua 24:15)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Don’t Ignore JESUS, \nHe’s Your Best Friend",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Do unto others as you want them to do to you Read Matt 7:12",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Dred Scott & Roe vs. Wade When the Supreme Court Got it all Wrong",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Drugs & Alcohol - A little Lift As You Go Downhill",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Dying for you was the most HE could do you Living for HIM Is the Least You Can Do",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "ETERNITY AHEAD \nLive for Jesus now",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Eternity is too long to be \nWrong - Live for JESUS now",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Everyone of the 50 states \nconstitutions mention God",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Evolution is an Anti-God Religion NOT SCIENCE",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Gambling Destroys Families Glory & Honor to JESUS (Heb. 2:9)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "God answers knee mail",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "God Said It That Settles It",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "God Says sex before marriage is WRONG (Gal.5:19-21)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "God’s Word will light your path (Psalm 119:105)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "HAPPINESS IS LIVING FOR JESUS",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Have a Good and Godly Day",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "He is Risen, JESUS CHRIST",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "He Looked Beyond My Sin & Saw My Need - JESUS CHRIST",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Help Stop AIDS, Get Married & Be Faithful",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Hey Liberal Godless Courts Don’t Mess With Marriage!",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "How Beautiful are the Bumpers that Preach the GOOD NEWS",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "How Can God Bless America When our TV’s Blare out Filth?",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "JUDGMENT DAY HAPPENS",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "JUDGMENT DAY IS COMING Settle out of court Now",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Repent, Believe & Live for JESUS",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Keep your Temper Nobody wants it",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Let Jesus do the overhaul & the Bible do your steering",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Liberal Courts are trying to make us one nation without God",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "LIFE CAN BE HARD But if you Ignore JESUS after Life will be harder in hell",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Live Now Like You’ll Wish You Had lived On Judgment Day",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Lives Changed by JESUS Prove the Bible is True",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Love Your Children Don’t Abort them",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Make room in your Life for JESUS",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "\"Mother Nature\" has a Senior Partner: He is FATHER GOD (read Genesis 1:1)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "My Body I Commit to the Dust, \nRelying on the Merits of Jesus \nChrist for the Pardon of my Sins(Samuel Adams)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "\"My Hopes of a Future Life \nAre All Founded Upon The \nGospel of Christ\" (President John Quincy Adams)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "No profanity in Heaven Better stop now",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "No Repentance in the GRAVE, Do it now",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "No second chances in hell Live for Jesus now",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Nothing will cook your goose faster than a red hot temper",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Oh how awful the cost If your Soul should be lost Live for Jesus Now",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "On Christ Believed \nIs Salvation Received",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "On Judgment day You’ll Wish You’d have been A Fanatic for JESUS",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Only JESUS Arose from the dead, to die no more",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Only JESUS Can Fill that Empty Place in Your Life",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Our hearts are restless until they rest in Christ",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "PARENTHOOD BEGINS AT CONCEPTION",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Partial Birth Abortion is Murder During Delivery",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Pay Day Some Day \nLive For JESUS Now!",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Please don’t kill \nyour unborn baby",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Politically correct is Positively corrupt",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Prayer was heard in Columbine H.S. on 4/20/99 - Let it Continue",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Pregnant Women go to baby showers - not Fetus showers",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Abortion Kills Babies",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Premarital sex can have a high price tag",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Pre-marital Sex has very Serious Side Effects - Aids, Pregnancy, Herpes etc.",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Pre-marital Sex is Stupid & Risky",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Premarital Sex Robs You of Your Precious Virginity",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Pre-Marital Sex \nIf you PLAY, you PAY \nAIDS, VD, & PREGNANCY",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "PRO-CHOICE IS NO CHOICE \nFOR UNBORN BABIES",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "PRO-CHOICE IS PRO-DEATH",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "PRO-CHOICE IS THE \nWRONG CHOICE",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Read the BIBLE",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Read the BIBLE before they \nRead it at your Funeral",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Remember Those Leaping to Their Death on 9-11",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Repent and live for JESUS \nThere is a place called HELL",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Repent Now or it may be never",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Repent now or pay later",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Return to JESUS & the \nGOD of your Youth",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Righteousness exalts a nation but sin is a reproach to any people (Prov. 14:34)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Roe Vs Wade was based on LIES - she was not raped",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "\"Safe Sex\" can kill you condoms often fail",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Save Sex For Marriage Say No to Pre-Marital Sex",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Seek ye the Lord \nwhile He may be found",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Selfish People Kill Their \nUnborn Babies so They Can \nLive as They Please",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Separation of Church & State as \nWe have been taught is a LIE",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Separation of Church & State \nIs Not in the US Constitution",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Serving JESUS gives \nPEACE in Your HEART",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Serving JESUS gives \nPurpose to Your LIFE",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Set your affections on things above, \nNot on the earth(Colossians 3:2)",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "SHAME on the Networks that Give your Kids Filth",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "SHAME, SHAME, AMERICA! \nYour TV Filth Would Shock \nOur Founding Fathers",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Shame! Shame! Hollywood \nYou Taught American \nWomen to Smoke & Cuss",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Since God is Gone from Schools \nHigher Education is LOWER",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Sinful Pleasure is QUICKLY over! WORRY \nAbout AIDS lasts Years",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Sin will fascinate you then assassinate you",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Sin Will Take You Farther Than You Want to Go, Keep You Longer Than You Want to stay & Cost You More than You Want to Pay",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Sin will thrill & then kill",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Smile! You could have been Aborted",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Start your day with Prayer and Bible",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Stay at Home Moms Rule the World. The Hand that Rocks the Cradle Rules the World.",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Smoking is Committing Suicide on the Installment Plan",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "Stop Abortion! America Has a Dead Baby Boom",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "STOP ABORTION Don’t Add Murder to the Sin of Fornication",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		},
		{
			title: "STOP ABORTION! No baby Deserves To be in a garbage can",
			image: "http://christianbumpersticker.org/images/example.jpg",
			keywords: ""	
				
		}
		];

};
