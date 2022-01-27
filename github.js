class Github {
  constructor() {
    this.client_id ='5623b9a142e48fd21734';
    this.client_secret = '91979b64f4301b9300d426ad61be9f4940226fac';
    this.repos_count =5;
    this.repos_sort = 'created: asc';
  }
  
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  } 
}
