module.exports = class entityAssessorHelper {

    static createEntityAssessor(programId, solutionId, entityId, userEntityDetails, userDetails) {
        return new Promise(async (resolve, reject) => {
            try {
                userEntityDetails.programId = programId;
                userEntityDetails.assessmentStatus = "pending";
                userEntityDetails.parentId = "";
                userEntityDetails["entities"] = entityId;
                userEntityDetails.solutionId = solutionId;
                userEntityDetails.createdBy = userDetails.id;
                userEntityDetails.updatedBy = userDetails.id;
                let entityAssessor = await database.models.entityAssessors.create(
                    userEntityDetails
                );
                return resolve(entityAssessor);
            } catch (error) {
                return reject(error)
            }
        })
    }


};