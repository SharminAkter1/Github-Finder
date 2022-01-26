class Github {
  constructor() {
    this.client_id =  '5623b9a142e48fd21734';
    this.client_secret = '91979b64f4301b9300d426ad61be9f4940226fac';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  } 
}
