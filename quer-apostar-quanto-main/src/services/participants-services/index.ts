import { errorHandler } from '../../errors';
import { ParticipantInput } from '../../protocols';
import { participantRepository } from '../../repositories/participant-repository';

function create(body:ParticipantInput){
	return participantRepository.create(body);
}


async function findOne(id:number){
	const participant = await participantRepository.findOne(id);

	if(!participant){
		throw errorHandler({
			message: 'Este participante não está registrado!',
			name:'BadRequestError'
		});
	}

	return participant;
}
function findMany(){
	return participantRepository.findMany();
}


export const participantServices = {
	create,
	findOne,
    findMany
};