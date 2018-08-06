var o = {
    "GlobalShortcuts": {
        "Keys": [{
                "Label": "Quick Search",
                "key": "/",
                "result": ""
            },
            {
                "Label": "Change Quick Search Type - Person",
                "key": "Alt+80",
                "result": ""
            },
            {
                "Label": "Change Quick Search Type - Job",
                "key": "Alt+74",
                "result": ""
            },
            {
                "Label": "Change Quick Search Type - New Hire Category",
                "key": "Alt+78",
                "result": ""
            },
            {
                "Label": "Change Quick Search Type - Talent Pools",
                "key": "Alt+84",
                "result": ""
            },
            {
                "Label": "Change Quick Search Type - Company",
                "key": "Alt+67",
                "result": ""
            },
            {
                "Label": "Change Quick Search Type - Room",
                "key": "Alt+82",
                "result": ""
            },
            {
                "Label": "Change Quick Search Type - Event",
                "key": "Alt+69",
                "result": ""
            },
            {
                "Label": "Go to Dashboard",
                "key": "G,D",
                "result": ""
            },
            {
                "Label": "Compose Email",
                "key": "G,E",
                "result": ""
            },
            {
                "Label": "Open Shortcut Help",
                "key": "Shift+/",
                "result": ""
            }
        ]
    },
    "Navigating": {
        "Keys": [{
                "Label": "In MiniBrowser - Next",
                "key": "J",
                "result": function () {
                    document.getElementById("recordRight_href").click();
                }
            },
            {
                "Label": "In MiniBrowser - Previous",
                "key": "K",
                "result": function () {
                    document.getElementById("recordLeft_href").click();
                }
            },
            {
                "Label": "Menu - Create",
                "key": "M,1",
                "result": function () {
                    document.getElementById('Create_navdropdown').click();
                    document.getElementById('Person_navdropdown').focus();
                }
            },
            {
                "Label": "Menu - Search",
                "key": "M,2",
                "result": function () {
                    document.getElementById('Search_navdropdown').click();
                    document.getElementById('Search_navdropdown').focus();
                }
            },
            {
                "Label": "Menu - Report",
                "key": "M,3",
                "result": function () {
                    document.getElementById('Report_navdropdown').click();
                    document.getElementById('Report_navdropdown').focus();
                }
            },
            {
                "Label": "Menu - Communicate",
                "key": "M,4",
                "result": function () {
                    document.getElementById('Communicate_navdropdown').click();
                    document.getElementById('Communicate_navdropdown').focus();
                }
            },
            {
                "Label": "Menu - Library",
                "key": "M,5",
                "result": function () {
                    document.getElementById('Library_navdropdown').click();
                    document.getElementById('Library_navdropdown').focus();
                }
            },
            {
                "Label": "Menu - Other",
                "key": "M,6",
                "result": function () {
                    document.getElementById('Other_navdropdown').click();
                    document.getElementById('Other_navdropdown').focus();
                }
            },
            {
                "Label": "Menu - Admin",
                "key": "M,7",
                "result": function () {
                    document.getElementById('Admin_navdropdown').click();
                    document.getElementById('Admin_navdropdown').focus();
                }
            },
            {
                "Label": "Report - Person",
                "key": "R,P",
                "result": function () {
                //  These dont have ids
                }
            },
            {
                "Label": "Report - Job",
                "key": "R,J",
                "result": function () {
                    // These dont have ids
                }
            },
            {
                "Label": "Report - Recruiting Workflow",
                "key": "R,R",
                "result": function () {
                    // These dont have ids
                }
            },

        ]
    },
    "Search Actions": {
        "Keys": [{
                "Label": "Search Action 1",
                "key": "A,1",
                "result": function () {
                    var Pos1ID = ""
                    if (searchtype === "Job") {
                        Pos1ID = "actionNewTemplate"
                    } else if (searchtype === "person") {
                        Pos1ID = "actionComm"
                    }
                }
            },
            {
                "Label": "Search Action 2",
                "key": "A,2",
                "result": function () {
                    var Pos2ID = ""
                    if (searchtype === "Job") {
                        Pos2ID = "actionForwardJob"
                    } else if (searchtype === "person") {
                        Pos2ID = "actionAptPerson"
                    }
                }
            },
            {
                "Label": "Search Action 3",
                "key": "A,3",
                "result": function () {
                    var Pos3ID = ""
                    if (searchtype === "Job") {
                        Pos3ID = "actionBulkEditFields"
                    } else if (searchtype === "person") {
                        Pos3ID = "actionTaskPerson"
                    }
                }
            },
            {
                "Label": "Search Action 4",
                "key": "A,4",
                "result": function () {
                    var Pos4ID= ""
                    if (searchtype === "Job") {
                        Pos4ID= "actionPost"
                    } else if (searchtype === "person") {
                        Pos4ID= "actionMassIdentify"
                    }
                }
            },
            {
                "Label": "Search Action 5",
                "key": "A,5",
                "result": function () {
                    var Pos5ID = ""
                    if (searchtype === "Job") {
                        Pos5ID = "actionCopyJob"
                    } else if (searchtype === "person") {
                        Pos5ID = "actionBulkEditFields"
                    }
                }
            },
            {
                "Label": "Search Action 6",
                "key": "A,6",
                "result": function () {
                    var Pos6ID = ""
                    if (searchtype === "Job") {
                        Pos6ID = "actionBulkSQDelete"
                    } else if (searchtype === "person") {
                        Pos6ID = "actionForwardCand"
                    }
                }
            }
        ]
    },
    "Profile Actions": {
        "Keys": [{
                "Label": "Edit Profile",
                "key": "E",
                "result": ""
            },
            {
                "Label": "Save",
                "key": "Alt+83",
                "result": ""
            },
            {
                "Label": "Job Profile - Go to People Tab",
                "key": "T,P",
                "result": ""
            },
            {
                "Label": "Jump to Field ",
                "key": ",",
                "result": ""
            }
        ]
    }
}