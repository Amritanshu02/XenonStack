#!/bin/bash


SCRIPT_NAME="internsctl"
SCRIPT_VERSION="1.0"

# Function to display manual page
show_manual_page() {
    cat <<EOF
NAME
    $SCRIPT_NAME - manage users, files, CPU, and memory information

SYNOPSIS
    $SCRIPT_NAME {user|file|cpu|memory} <subcommand> [options]


    



OPTIONS
    --help                         Show this help message and exit.
    --version                      Show version information and exit.


# Function to display help message
show_help() {
    show_manual_page
}

# Function to display version information
show_version() {
    echo "$SCRIPT_NAME version $SCRIPT_VERSION"
}

# Function to create a new user
create_user() {
    #if [ $# -ne 1 ]; then
    

    username=$1

  
    useradd3 -m -s /bin/bash $username3

  

# Function to list all regular users
list_users() {
    cut -d: -f1 /etc/passwd
}


root_user() {
    grep -Po '^sudo.+:\K.*$' /etc/group | tr ',' '\n'
}

# Function to get information about a file
get_file_info() {
    if [ $# -ne 1 ]; then
        echo "Usage: $SCRIPT_NAME file getinfo <file-name>"
        exit 1
    fi

    filename=$1

    # Add logic to get information about the specified file
    stat "$filename"
}



# Main script logic
case "$1" in
    
	
	user)
        case "$2" in
            create)
		create_user -m "$3"    
                ;;
            list)
                if [ "$4" == "--sudo-only" ]; then
                    list_sudo_users
                else
                    list_users
                fi
                ;;
            exists)
                user_exists "$3"
                ;;
            update)
                update_user "$3" "$4"
                ;;
            *)
                echo "Invalid subcommand for 'user'."
                exit 1
                ;;
        esac
        ;;
    file)
        case "$2" in
            getinfo)
                get_file_info "$3"
                ;;
            chmod)
                change_file_permissions "$3" "$4"
                ;;
            *)
                echo "Invalid subcommand for 'file'."
                exit 1
                ;;
        esac
        ;;
	
	
                echo "Invalid subcommand for 'cpu'."
                exit 1
                ;;
        esac
        ;;
    memory)
        case "$2" in
            getinfo)
                free -h
                ;;
           
        esac
        ;;
    --help)
        show_help
        ;;
    --version)
        show_version
        ;;
    *)
        echo "Usage: $SCRIPT_NAME {user|file|cpu|memory|--help|--version} <subcommand> [options]"
        exit 1
        ;;
esac