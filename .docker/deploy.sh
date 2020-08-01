# Traemos los cambios del repositorio
git pull origin master
# Traemos la ultima
echo gCjJ4kQUrKh7w11j2EyH | cat | docker login registry.gitlab.com --username kerry --password-stdin
docker pull registry.gitlab.com/sebastianrh.sarh/solemne2_g1
# Hacemos deploy de la imagen
cd /home/jenkins/solemne2_g1/.docker
docker stack deploy -c docker.swarm.yml chorizord --with-registry-auth
